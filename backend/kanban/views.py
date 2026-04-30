from django.db import models
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Board, List, Card, Workspace, WorkspaceMember, Checklist, ChecklistItem, Invitation, Notification, Label, Attachment, OTPVerification
from .serializers import (
    BoardSerializer, ListSerializer, CardSerializer, RegisterSerializer, 
    WorkspaceSerializer, ChecklistSerializer, ChecklistItemSerializer,
    InvitationSerializer, NotificationSerializer, LabelSerializer, AttachmentSerializer,
    WorkspaceMemberSerializer
)
from .permissions import IsWorkspaceManager, IsWorkspaceMember, CanMoveCard
from .utils import send_productive_flow_email
from .ai_service import generate_board_structure, analyze_card_content, chat_with_assistant
from django.contrib.auth.models import User
from django.db.models import Count
from django.conf import settings

class SearchViewSet(viewsets.ViewSet):
    permission_classes = [permissions.IsAuthenticated]

    def list(self, request):
        query = request.query_params.get('q', '')
        if not query:
            return Response({"boards": [], "cards": []})

        user = request.user
        boards = Board.objects.filter(
            (models.Q(owner=user) | models.Q(members=user)) &
            models.Q(title__icontains=query)
        ).distinct()

        cards = Card.objects.filter(
            (models.Q(list__board__owner=user) | models.Q(list__board__members=user)) &
            (models.Q(title__icontains=query) | models.Q(description__icontains=query))
        ).distinct()

        return Response({
            "boards": BoardSerializer(boards, many=True).data,
            "cards": CardSerializer(cards, many=True).data
        })

class AIViewSet(viewsets.ViewSet):
    permission_classes = [permissions.IsAuthenticated]

    @action(detail=False, methods=['post'])
    def chat(self, request):
        message = request.data.get('message', '')
        if not message:
            return Response({"error": "Message is required"}, status=status.HTTP_400_BAD_REQUEST)
        
        # Build context
        user = request.user
        boards = Board.objects.filter(models.Q(owner=user) | models.Q(members=user)).distinct()
        board_data = []
        for b in boards:
            board_data.append({
                "title": b.title,
                "lists": [{"title": l.title, "cards": [{"title": c.title, "assigned_to_me": user in c.assigned_members.all()} for c in l.cards.all()]} for l in b.lists.all()]
            })
        
        context = f"User: {user.username}. Boards: {board_data}"
        
        response_text = chat_with_assistant(message, context)
        return Response({"reply": response_text}, status=status.HTTP_200_OK)

class BoardViewSet(viewsets.ModelViewSet):
    serializer_class = BoardSerializer
    permission_classes = [permissions.IsAuthenticated, IsWorkspaceMember]

    def get_queryset(self):
        user = self.request.user
        return Board.objects.filter(
            models.Q(owner=user) | 
            models.Q(members=user) | 
            models.Q(workspace__members=user)
        ).distinct()

    def perform_create(self, serializer):
        workspace_id = self.request.data.get('workspace_id')
        if workspace_id:
            from .models import Workspace
            workspace = Workspace.objects.get(id=workspace_id)
            board = serializer.save(owner=self.request.user, workspace=workspace)
        else:
            board = serializer.save(owner=self.request.user)
        
        # Ensure default lists (Phase 2 Upgrade)
        self.ensure_default_lists(board)

    def ensure_default_lists(self, board):
        DEFAULT_LISTS = ["Task Assigned", "Working", "Completed"]
        if not board.lists.exists():
            for i, title in enumerate(DEFAULT_LISTS):
                List.objects.create(board=board, title=title, position=i)

    @action(detail=True, methods=['post'])
    def remove_member(self, request, pk=None):
        board = self.get_object()
        if board.owner != request.user:
            return Response({"error": "Only the owner can remove members"}, status=status.HTTP_403_FORBIDDEN)
        
        user_id = request.data.get('user_id')
        if not user_id:
            return Response({"error": "user_id is required"}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            member = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
            
        if member == board.owner:
            return Response({"error": "Owner cannot be removed from board"}, status=status.HTTP_400_BAD_REQUEST)
            
        board.members.remove(member)
        return Response({"message": "Member removed successfully"}, status=status.HTTP_200_OK)

    @action(detail=True, methods=['post'])
    def generate_ai(self, request, pk=None):
        board = self.get_object()
        prompt = request.data.get('prompt')
        if not prompt:
            return Response({"error": "Prompt is required"}, status=status.HTTP_400_BAD_REQUEST)
        
        structure = generate_board_structure(prompt)
        if not structure:
            return Response({"error": "AI failed to generate structure"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
        for list_data in structure.get('lists', []):
            lst = List.objects.create(title=list_data['title'], board=board, position=999)
            for card_data in list_data.get('cards', []):
                Card.objects.create(
                    title=card_data['title'], 
                    description=card_data.get('description', ''), 
                    list=lst, 
                    position=999
                )
                
        return Response({"message": "Board generated successfully"}, status=status.HTTP_200_OK)

class WorkspaceViewSet(viewsets.ModelViewSet):
    serializer_class = WorkspaceSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Workspace.objects.filter(models.Q(owner=user) | models.Q(members=user)).distinct()

    def perform_create(self, serializer):
        from .models import WorkspaceMember
        workspace = serializer.save(owner=self.request.user)
        # Create the 'manager' record for the owner
        WorkspaceMember.objects.create(user=self.request.user, workspace=workspace, role='manager')

    @action(detail=True, methods=['post'])
    def remove_member(self, request, pk=None):
        workspace = self.get_object()
        if workspace.owner != request.user:
            return Response({"error": "Only the owner can remove members"}, status=status.HTTP_403_FORBIDDEN)
        
        user_id = request.data.get('user_id')
        if not user_id:
            return Response({"error": "user_id is required"}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            member = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
            
        if member == workspace.owner:
            return Response({"error": "Owner cannot be removed from workspace"}, status=status.HTTP_400_BAD_REQUEST)
            
        workspace.members.remove(member)
        return Response({"message": "Member removed successfully"}, status=status.HTTP_200_OK)

class ChecklistViewSet(viewsets.ModelViewSet):
    serializer_class = ChecklistSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Checklist.objects.filter(models.Q(card__list__board__owner=user) | models.Q(card__list__board__members=user)).distinct()

class ChecklistItemViewSet(viewsets.ModelViewSet):
    serializer_class = ChecklistItemSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return ChecklistItem.objects.filter(models.Q(checklist__card__list__board__owner=user) | models.Q(checklist__card__list__board__members=user)).distinct()

class AttachmentViewSet(viewsets.ModelViewSet):
    serializer_class = AttachmentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Attachment.objects.filter(models.Q(card__list__board__owner=user) | models.Q(card__list__board__members=user)).distinct()

class LabelViewSet(viewsets.ModelViewSet):
    serializer_class = LabelSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Label.objects.filter(models.Q(board__owner=user) | models.Q(board__members=user)).distinct()

class ListViewSet(viewsets.ModelViewSet):
    serializer_class = ListSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return List.objects.filter(models.Q(board__owner=user) | models.Q(board__members=user)).distinct()

class CardViewSet(viewsets.ModelViewSet):
    serializer_class = CardSerializer
    permission_classes = [permissions.IsAuthenticated, IsWorkspaceMember]

    def get_queryset(self):
        user = self.request.user
        return Card.objects.filter(
            models.Q(list__board__owner=user) | 
            models.Q(list__board__members=user) |
            models.Q(list__board__workspace__members=user)
        ).distinct()

    def perform_create(self, serializer):
        serializer.save(assigned_by=self.request.user)

    def update(self, request, *args, **kwargs):
        card = self.get_object()
        try:
            # RBAC Check: Allow if Board Owner, Board Member, Workspace Manager, or Assigned User
            is_board_owner = card.list.board.owner == request.user
            is_board_member = card.list.board.members.filter(id=request.user.id).exists()
            is_manager = False
            if card.list.board.workspace:
                is_manager = WorkspaceMember.objects.filter(user=request.user, workspace=card.list.board.workspace, role='manager').exists()
            
            if not (is_board_owner or is_board_member or is_manager or card.assigned_to == request.user):
                return Response({"error": "Only authorized members can update this card"}, status=status.HTTP_403_FORBIDDEN)
        except Exception as e:
            # If the check itself fails (e.g. DB lock), default to allowing the owner as a safety measure
            if card.list.board.owner != request.user:
                return Response({"error": "Security check failed, please try again."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        response = super().update(request, *args, **kwargs)
        if response.status_code == 200:
            try:
                card.refresh_from_db()
                from .utils import broadcast_kanban_event
                board_id = card.list.board.id if card.list and card.list.board else None
                if board_id:
                    broadcast_kanban_event(board_id, 'card_updated', f"Card '{card.title}' updated", response.data)
            except Exception as e:
                # Log error but don't fail the request. Real-time sync is secondary to data persistence.
                print(f"WebSocket Broadcast Error: {e}")
        return response

    def partial_update(self, request, *args, **kwargs):
        card = self.get_object()
        try:
            # RBAC Check: Allow if Board Owner, Board Member, Workspace Manager, or Assigned User
            is_board_owner = card.list.board.owner == request.user
            is_board_member = card.list.board.members.filter(id=request.user.id).exists()
            is_manager = False
            if card.list.board.workspace:
                is_manager = WorkspaceMember.objects.filter(user=request.user, workspace=card.list.board.workspace, role='manager').exists()
                
            if not (is_board_owner or is_board_member or is_manager or card.assigned_to == request.user):
                return Response({"error": "Only authorized members can update this card"}, status=status.HTTP_403_FORBIDDEN)
        except Exception as e:
            # Safety fallback
            if card.list.board.owner != request.user:
                 return Response({"error": "Security check failed, please try again."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        response = super().partial_update(request, *args, **kwargs)
        if response.status_code == 200:
            try:
                card.refresh_from_db()
                from .utils import broadcast_kanban_event
                board_id = card.list.board.id if card.list and card.list.board else None
                if board_id:
                    broadcast_kanban_event(board_id, 'card_updated', f"Card '{card.title}' partially updated", response.data)
            except Exception as e:
                # Log error but don't fail the request
                print(f"WebSocket Broadcast Error: {e}")
        return response

    @action(detail=True, methods=['post'], permission_classes=[permissions.IsAuthenticated, IsWorkspaceManager])
    def assign(self, request, pk=None):
        card = self.get_object()
        user_id = request.data.get('user_id')
        if not user_id:
            return Response({"error": "user_id is required"}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            assignee = User.objects.get(id=user_id)
            # Verify assignee is a member of the workspace
            workspace = card.list.board.workspace
            if not workspace.members.filter(id=assignee.id).exists():
                return Response({"error": "Assignee must be a member of the workspace"}, status=status.HTTP_400_BAD_REQUEST)
                
            card.assigned_to = assignee
            card.assigned_by = request.user
            card.save()
            
            card_data = CardSerializer(card).data
            from .utils import broadcast_kanban_event
            broadcast_kanban_event(card.list.board.id, 'card_assigned', f"Card assigned to {assignee.username}", card_data)
            
            # Phase 3: Trigger async email notification
            from .signals import send_async_email
            send_async_email(
                subject=f"New Task Assigned: {card.title}",
                template_name="notification",
                context={
                    "message": f"You have been assigned to the task '{card.title}' by {request.user.username} on board '{card.list.board.title}'."
                },
                to_email=assignee.email
            )

            # Create in-app notification
            from .models import Notification
            Notification.objects.create(
                user=assignee,
                message=f"You were assigned to '{card.title}'",
                type="card_assigned"
            )
            
            return Response(card_data, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

    @action(detail=True, methods=['post'])
    def expand_ai(self, request, pk=None):
        card = self.get_object()
        expanded_text = analyze_card_content(card.title, card.description)
        card.description = expanded_text
        card.save()
        return Response({"description": expanded_text}, status=status.HTTP_200_OK)

class InvitationViewSet(viewsets.ModelViewSet):
    serializer_class = InvitationSerializer
    permission_classes = [permissions.IsAuthenticated]
    lookup_field = 'token'

    def get_queryset(self):
        return Invitation.objects.filter(models.Q(sender=self.request.user) | models.Q(email=self.request.user.email))

    def perform_create(self, serializer):
        invitation = serializer.save(sender=self.request.user)
        
        # Send Email
        try:
            target_name = "Productive Flow"
            if invitation.workspace:
                target_name = invitation.workspace.name
            elif invitation.board:
                target_name = invitation.board.title
                
            accept_url = f"{settings.FRONTEND_URL}/invite/{invitation.token}"
            decline_url = f"{settings.FRONTEND_URL}/invite/{invitation.token}?action=decline"
            
            send_productive_flow_email(
                subject=f"Invitation to join {target_name}",
                template_name="invitation",
                context={
                    "inviter_name": self.request.user.username,
                    "target_name": target_name,
                    "message": invitation.message,
                    "accept_url": accept_url,
                    "decline_url": decline_url
                },
                to_email=invitation.email
            )
        except Exception as e:
            # Never let email failure crash the invitation creation
            print(f"Invitation Email Error: {e}")

    @action(detail=True, methods=['post'], permission_classes=[permissions.AllowAny])
    def accept(self, request, token=None):
        invitation = Invitation.objects.get(token=token)
        if invitation.status != 'pending':
            return Response({"error": "Invitation already processed"}, status=status.HTTP_400_BAD_REQUEST)
        
        email = invitation.email
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({"message": "Please register to accept invitation", "email": email}, status=status.HTTP_200_OK)

        # Add user to workspace/board
        if invitation.workspace:
            from .models import WorkspaceMember
            WorkspaceMember.objects.get_or_create(user=user, workspace=invitation.workspace, defaults={'role': 'member'})
        if invitation.board:
            invitation.board.members.add(user)
        
        invitation.status = 'accepted'
        invitation.save()

        # Notify Sender
        Notification.objects.create(
            user=invitation.sender,
            message=f"{user.username} accepted your invitation to {invitation.workspace or invitation.board}",
            type="invite_accepted"
        )
        
        # Confirmation Email to User
        send_productive_flow_email(
            subject="You've successfully joined!",
            template_name="notification",
            context={"message": f"You are now a member of {invitation.workspace or invitation.board}"},
            to_email=user.email
        )

        return Response({"message": "Invitation accepted successfully"}, status=status.HTTP_200_OK)

    @action(detail=True, methods=['post'], permission_classes=[permissions.AllowAny])
    def decline(self, request, token=None):
        invitation = Invitation.objects.get(token=token)
        if invitation.status != 'pending':
            return Response({"error": "Invitation already processed"}, status=status.HTTP_400_BAD_REQUEST)
        
        invitation.status = 'declined'
        invitation.save()

        # Notify Sender
        Notification.objects.create(
            user=invitation.sender,
            message=f"{invitation.email} declined your invitation to {invitation.workspace or invitation.board}",
            type="invite_declined"
        )
        
        # Email to Inviter
        send_productive_flow_email(
            subject="User declined your invitation",
            template_name="notification",
            context={"message": f"{invitation.email} has declined your invitation to join {invitation.workspace or invitation.board}"},
            to_email=invitation.sender.email
        )

        return Response({"message": "Invitation declined"}, status=status.HTTP_200_OK)

class NotificationViewSet(viewsets.ModelViewSet):
    serializer_class = NotificationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Notification.objects.filter(user=self.request.user).order_by('-created_at')

    @action(detail=False, methods=['post'])
    def mark_all_read(self, request):
        Notification.objects.filter(user=self.request.user, read=False).update(read=True)
        return Response({"message": "All notifications marked as read"}, status=status.HTTP_200_OK)

class AuthViewSet(viewsets.GenericViewSet):
    permission_classes = [permissions.AllowAny]

    @action(detail=False, methods=['get'], permission_classes=[permissions.IsAuthenticated])
    def me(self, request):
        user = request.user
        # Get Stats
        board_count = Board.objects.filter(models.Q(owner=user) | models.Q(members=user)).distinct().count()
        card_count = Card.objects.filter(models.Q(list__board__owner=user) | models.Q(list__board__members=user)).count()
        
        return Response({
            "id": user.id,
            "username": user.username,
            "email": user.email,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "stats": {
                "boards": board_count,
                "cards": card_count,
                "activity": 42 # Mock for now
            }
        })

    @action(detail=False, methods=['post'])
    def register(self, request):
        import random
        from django.utils import timezone
        
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data.get('email')
            
            # Generate 6-digit OTP
            otp = str(random.randint(100000, 999999))
            
            # Store/Update OTP
            OTPVerification.objects.filter(email=email).delete()
            OTPVerification.objects.create(email=email, otp=otp)
            
            # Send OTP Email
            send_productive_flow_email(
                subject="Your Verification Code",
                template_name="notification",
                context={
                    "message": f"Your verification code is: {otp}. It will expire in 10 minutes."
                },
                to_email=email
            )
            
            return Response({
                "message": "OTP sent to email",
                "email": email
            }, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['post'])
    def verify_otp(self, request):
        from django.utils import timezone
        import datetime
        
        email = request.data.get('email')
        otp = request.data.get('otp')
        
        if not email or not otp:
            return Response({"error": "Email and OTP are required"}, status=status.HTTP_400_BAD_REQUEST)
            
        try:
            verification = OTPVerification.objects.get(email=email, otp=otp)
            # Check if expired (10 minutes)
            if timezone.now() > verification.created_at + datetime.timedelta(minutes=10):
                verification.delete()
                return Response({"error": "OTP has expired"}, status=status.HTTP_400_BAD_REQUEST)
                
            # Valid OTP, now register the user
            serializer = RegisterSerializer(data=request.data)
            if serializer.is_valid():
                user = serializer.save()
                verification.delete()
                
                # Welcome Email
                send_productive_flow_email(
                    subject="Welcome to Productive Flow 🚀",
                    template_name="welcome",
                    context={
                        "user_name": user.username,
                        "dashboard_url": f"{settings.FRONTEND_URL}/boards-dashboard"
                    },
                    to_email=user.email
                )

                # Check for pending invitations
                invites = Invitation.objects.filter(email=user.email, status='pending')
                for invite in invites:
                    if invite.workspace:
                        from .models import WorkspaceMember
                        WorkspaceMember.objects.get_or_create(user=user, workspace=invite.workspace, defaults={'role': 'member'})
                    if invite.board:
                        invite.board.members.add(user)
                    invite.status = 'accepted'
                    invite.save()
                    
                    Notification.objects.create(
                        user=invite.sender,
                        message=f"{user.username} joined via your invitation!",
                        type="invite_accepted"
                    )

                from rest_framework_simplejwt.tokens import RefreshToken
                refresh = RefreshToken.for_user(user)

                return Response({
                    "message": "User registered successfully",
                    "access": str(refresh.access_token),
                    "refresh": str(refresh),
                    "user": serializer.data
                }, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
        except OTPVerification.DoesNotExist:
            return Response({"error": "Invalid OTP"}, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['post'])
    def google_login(self, request):
        import requests
        access_token = request.data.get('access_token')
        if not access_token:
            return Response({"error": "Access token is required"}, status=status.HTTP_400_BAD_REQUEST)
            
        try:
            response = requests.get(
                'https://www.googleapis.com/oauth2/v3/userinfo',
                headers={'Authorization': f'Bearer {access_token}'}
            )
            if response.status_code != 200:
                return Response({"error": "Invalid Google token"}, status=status.HTTP_400_BAD_REQUEST)
                
            user_info = response.json()
            email = user_info.get('email')
            name = user_info.get('name', '')
            
            if not email:
                return Response({"error": "Email not provided by Google"}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"error": "Failed to verify Google token"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
        # Check if user exists but was created via regular signup
        existing_user = User.objects.filter(email=email).first()
        if existing_user and not existing_user.has_usable_password():
             # This is a bit complex for a demo, so we'll just allow it for now
             # but in reality you'd check a 'social_id' field.
             pass

        user, created = User.objects.get_or_create(email=email, defaults={
            'username': email.split('@')[0] + '_' + User.objects.count().__str__(),
            'first_name': name.split(' ')[0] if ' ' in name else name,
            'last_name': name.split(' ')[1] if ' ' in name else ''
        })
        
        if created:
            # Welcome Email for new Google users
            send_productive_flow_email(
                subject="Welcome to Productive Flow 🚀",
                template_name="welcome",
                context={
                    "user_name": user.username,
                    "dashboard_url": f"{settings.FRONTEND_URL}/boards-dashboard"
                },
                to_email=user.email
            )
            
            # Auto-join from pending invites
            invites = Invitation.objects.filter(email=user.email, status='pending')
            for invite in invites:
                if invite.workspace:
                    from .models import WorkspaceMember
                    WorkspaceMember.objects.get_or_create(user=user, workspace=invite.workspace, defaults={'role': 'member'})
                if invite.board:
                    invite.board.members.add(user)
                invite.status = 'accepted'
                invite.save()

        # Log in the user and return token
        from rest_framework_simplejwt.tokens import RefreshToken
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'user': {
                'id': user.id,
                'username': user.username,
                'email': user.email
            }
        })

    @action(detail=False, methods=['patch'], permission_classes=[permissions.IsAuthenticated])
    def update_profile(self, request):
        from .serializers import UserUpdateSerializer
        serializer = UserUpdateSerializer(request.user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
