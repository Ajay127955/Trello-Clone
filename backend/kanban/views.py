from rest_framework import viewsets, permissions, status, views
from rest_framework.decorators import action
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.db import models
from .models import Board, ProjectCategory, Task, TaskAssignment, Workspace, Activity, Invitation, Notification, OTPVerification
from .serializers import (
    BoardSerializer, ProjectCategorySerializer, TaskSerializer, 
    TaskAssignmentSerializer, UserSerializer, RegisterSerializer,
    WorkspaceSerializer, ActivitySerializer, InvitationSerializer, NotificationSerializer
)
from rest_framework_simplejwt.tokens import RefreshToken
import requests
import logging
import random
import string
from django.conf import settings

logger = logging.getLogger(__name__)


class MeView(views.APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request):
        return Response(UserSerializer(request.user).data)


class BoardViewSet(viewsets.ModelViewSet):
    serializer_class = BoardSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Board.objects.filter(
            models.Q(owner=user) | 
            models.Q(members=user) | 
            models.Q(workspace__owner=user) |
            models.Q(workspace__members=user)
        ).distinct()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ProjectCategoryViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectCategorySerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        board_id = self.request.query_params.get('board_id')
        if board_id:
            return ProjectCategory.objects.filter(board_id=board_id)
        return ProjectCategory.objects.all()


class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        category_id = self.request.query_params.get('category_id')
        if category_id:
            return Task.objects.filter(category_id=category_id)
        return Task.objects.all()

    def perform_create(self, serializer):
        task = serializer.save(created_by=self.request.user)

        # Create a TaskAssignment for every assigned user and notify them
        assigned_users = task.assigned_users.all()
        for assigned_user in assigned_users:
            TaskAssignment.objects.get_or_create(task=task, user=assigned_user)

            # In-app notification
            Notification.objects.create(
                user=assigned_user,
                message=f"{self.request.user.username} assigned you to: {task.title}",
                type="task_assigned"
            )

            # Email notification
            try:
                from .utils import send_productive_flow_email
                board = task.category.board
                send_productive_flow_email(
                    subject=f"New Task Assigned: {task.title}",
                    template_name='task_assigned',
                    context={
                        'assigned_to': assigned_user,
                        'assigned_by': self.request.user,
                        'task': task,
                        'board': board,
                        'board_url': f"{settings.FRONTEND_URL}/board-view/{board.id}",
                    },
                    to_email=assigned_user.email
                )
            except Exception as e:
                logger.error(f"[Task] Email notification failed for {assigned_user.email}: {e}")

        # Broadcast real-time event
        try:
            from .utils import broadcast_kanban_event
            board = task.category.board
            Activity.objects.create(
                user=self.request.user,
                board=board,
                task=task,
                action_type="assigned",
                to_state=task.title[:50]
            )
            broadcast_kanban_event(
                board.id,
                'task_assigned',
                f"{self.request.user.username} created and assigned '{task.title}'",
                {"task_id": task.id, "board_id": board.id},
                user=self.request.user
            )
        except Exception as e:
            logger.error(f"[Task] Broadcast failed: {e}")



class TaskAssignmentViewSet(viewsets.ModelViewSet):
    serializer_class = TaskAssignmentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return TaskAssignment.objects.filter(user=self.request.user)

    def partial_update(self, request, *args, **kwargs):
        assignment = self.get_object()
        old_status = assignment.status
        new_status = request.data.get('status')
        response = super().partial_update(request, *args, **kwargs)
        if new_status and new_status != old_status:
            from .utils import broadcast_kanban_event
            Activity.objects.create(
                user=request.user,
                board=assignment.task.category.board,
                task=assignment.task,
                action_type="moved",
                from_state=old_status,
                to_state=new_status
            )
            broadcast_kanban_event(
                assignment.task.category.board.id, 
                'task_moved', 
                f"{request.user.username} moved task to {new_status}",
                {"task_id": assignment.task.id, "user_id": request.user.id, "status": new_status},
                user=request.user
            )

            # 🎉 Send completion congratulation email
            if new_status == 'completed':
                try:
                    from .utils import send_productive_flow_email
                    import datetime
                    send_productive_flow_email(
                        subject=f"🎉 Task Completed — Well Done, {request.user.username}!",
                        template_name='task_completed',
                        context={
                            'user': request.user,
                            'task': assignment.task,
                            'board': assignment.task.category.board,
                            'completed_date': datetime.date.today().strftime('%B %d, %Y'),
                            'board_url': f"{settings.FRONTEND_URL}/board-view/{assignment.task.category.board.id}",
                        },
                        to_email=request.user.email
                    )
                    logger.info(f"[Task] Completion email sent to {request.user.email}")
                except Exception as e:
                    logger.error(f"[Task] Completion email failed: {e}")

        return response


class ActivityViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = ActivitySerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        board_id = self.request.query_params.get('board_id')
        qs = Activity.objects.all()
        if board_id:
            qs = qs.filter(board_id=board_id)
        return qs.filter(models.Q(board__owner=user) | models.Q(board__members=user)).distinct()


class AuthViewSet(viewsets.GenericViewSet):
    permission_classes = [permissions.AllowAny]

    def _handle_invitation(self, user, token):
        """Claim an invitation token: add user to board/workspace and mark accepted."""
        if not token:
            return
        try:
            invitation = Invitation.objects.get(token=token, status='pending')
            logger.info(f"[Invitation] Claiming token={token} for user={user.email}")
            if invitation.board:
                invitation.board.members.add(user)
                logger.info(f"[Invitation] Added {user.email} to board: {invitation.board.title}")
            if invitation.workspace:
                invitation.workspace.members.add(user)
                logger.info(f"[Invitation] Added {user.email} to workspace: {invitation.workspace.name}")
            invitation.status = 'accepted'
            invitation.save()
            logger.info(f"[Invitation] Token {token} marked as accepted")
        except Invitation.DoesNotExist:
            logger.warning(f"[Invitation] Token {token} not found or already accepted")
        except Exception as e:
            logger.error(f"[Invitation] Error claiming token {token}: {str(e)}")

    def _make_tokens(self, user):
        refresh = RefreshToken.for_user(user)
        return {
            'user': UserSerializer(user).data,
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }

    # ── Step 1: Send OTP + store pending registration ──────────────────────
    @action(detail=False, methods=['post'])
    def register(self, request):
        """
        Step 1 of registration: validate data, send OTP.
        Does NOT create the user yet.
        """
        email = request.data.get('email', '').strip().lower()
        password = request.data.get('password', '')
        username = request.data.get('username', '').strip()

        if not email or not password:
            return Response({'error': 'Email and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(email=email).exists():
            return Response({'error': 'An account with this email already exists.'}, status=status.HTTP_400_BAD_REQUEST)

        # Generate and store OTP
        otp = ''.join(random.choices(string.digits, k=6))
        OTPVerification.objects.update_or_create(email=email, defaults={'otp': otp})

        # Send OTP email
        from .utils import send_productive_flow_email
        send_productive_flow_email(
            subject='Your Verification Code',
            template_name='otp',
            context={'otp': otp, 'email': email},
            to_email=email
        )
        logger.info(f"[Register] OTP sent to {email}")
        return Response({'message': 'OTP sent to your email. Please verify.'}, status=status.HTTP_200_OK)

    # ── Step 2: Verify OTP + create user + claim invitation ────────────────
    @action(detail=False, methods=['post'])
    def verify_otp(self, request):
        """
        Step 2 of registration: verify OTP, create user, claim invitation token.
        """
        email = request.data.get('email', '').strip().lower()
        otp = request.data.get('otp', '').strip()
        password = request.data.get('password', '')
        username = request.data.get('username', '').strip()
        invitation_token = request.data.get('token')

        if not email or not otp or not password:
            return Response({'error': 'Email, OTP, and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            otp_record = OTPVerification.objects.get(email=email, otp=otp)
        except OTPVerification.DoesNotExist:
            return Response({'error': 'Invalid or expired OTP.'}, status=status.HTTP_400_BAD_REQUEST)

        # OTP valid — create user
        if User.objects.filter(email=email).exists():
            return Response({'error': 'Account already exists.'}, status=status.HTTP_400_BAD_REQUEST)

        if not username:
            username = email.split('@')[0]

        # Ensure unique username
        base = username
        counter = 1
        while User.objects.filter(username=username).exists():
            username = f"{base}{counter}"
            counter += 1

        user = User.objects.create_user(username=username, email=email, password=password)
        Workspace.objects.create(name=f"{user.username}'s Workspace", owner=user)

        # Clean up OTP
        otp_record.delete()

        # Claim invitation if token provided
        self._handle_invitation(user, invitation_token)

        logger.info(f"[Register] User created: {email}")
        return Response(self._make_tokens(user), status=status.HTTP_201_CREATED)

    # ── Custom login: validates credentials + claims invitation ─────────────
    @action(detail=False, methods=['post'])
    def login(self, request):
        """
        Custom login endpoint that supports invitation token claiming.
        Accepts email or username as the identifier.
        """
        identifier = request.data.get('username', '').strip()
        password = request.data.get('password', '')
        invitation_token = request.data.get('token')

        if not identifier or not password:
            return Response({'error': 'Credentials required.'}, status=status.HTTP_400_BAD_REQUEST)

        # Support login with email
        if '@' in identifier:
            try:
                user_obj = User.objects.get(email=identifier)
                identifier = user_obj.username
            except User.DoesNotExist:
                return Response({'error': 'Invalid credentials.'}, status=status.HTTP_401_UNAUTHORIZED)

        user = authenticate(username=identifier, password=password)
        if not user:
            return Response({'error': 'Invalid credentials.'}, status=status.HTTP_401_UNAUTHORIZED)

        # Claim invitation
        self._handle_invitation(user, invitation_token)

        return Response(self._make_tokens(user))

    # ── Google OAuth ────────────────────────────────────────────────────────
    @action(detail=False, methods=['post'])
    def google_login(self, request):
        access_token = request.data.get('access_token')
        invitation_token = request.data.get('token')
        if not access_token:
            return Response({'error': 'access_token required'}, status=status.HTTP_400_BAD_REQUEST)

        r = requests.get(f'https://www.googleapis.com/oauth2/v3/userinfo?access_token={access_token}')
        if r.status_code != 200:
            return Response({'error': 'Invalid Google token'}, status=status.HTTP_400_BAD_REQUEST)

        data = r.json()
        email = data.get('email')
        username = data.get('name', email.split('@')[0])

        user, created = User.objects.get_or_create(email=email, defaults={'username': username})
        if created:
            user.set_unusable_password()
            user.save()
            Workspace.objects.create(name=f"{user.username}'s Workspace", owner=user)

        self._handle_invitation(user, invitation_token)
        return Response(self._make_tokens(user))

    # ── Logout ──────────────────────────────────────────────────────────────
    @action(detail=False, methods=['post'])
    def logout(self, request):
        return Response({'message': 'Logged out successfully.'})


class WorkspaceViewSet(viewsets.ModelViewSet):
    serializer_class = WorkspaceSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Workspace.objects.filter(models.Q(owner=user) | models.Q(members=user)).distinct()


class InvitationViewSet(viewsets.ModelViewSet):
    serializer_class = InvitationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Invitation.objects.filter(
            models.Q(board__owner=user) | models.Q(email=user.email)
        ).distinct()

    def perform_create(self, serializer):
        invitation = serializer.save(sender=self.request.user)
        user_exists = User.objects.filter(email=invitation.email).exists()
        target_path = "/login" if user_exists else "/sign-up"
        from .utils import send_productive_flow_email
        board_title = invitation.board.title if invitation.board else "Workspace"
        context = {
            'invitation': invitation,
            'accept_url': f"{settings.FRONTEND_URL}{target_path}?token={invitation.token}&email={invitation.email}",
            'decline_url': f"{settings.FRONTEND_URL}/invitation/decline?token={invitation.token}",
            'sender_name': self.request.user.username,
            'board_title': board_title,
        }
        send_productive_flow_email(
            f"You're invited to join {board_title}",
            'invitation',
            context,
            invitation.email
        )
        if user_exists:
            invitee = User.objects.get(email=invitation.email)
            Notification.objects.create(
                user=invitee,
                message=f"{self.request.user.username} invited you to {board_title}",
                type="invitation"
            )
            logger.info(f"[Invite] Notification created for {invitation.email}")
        logger.info(f"[Invite] Invitation sent to {invitation.email} → {target_path}")


class NotificationViewSet(viewsets.ModelViewSet):
    serializer_class = NotificationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Notification.objects.filter(user=self.request.user).order_by('-created_at')

    @action(detail=False, methods=['post'])
    def mark_all_read(self, request):
        Notification.objects.filter(user=request.user, read=False).update(read=True)
        return Response({'message': 'All marked as read'})
