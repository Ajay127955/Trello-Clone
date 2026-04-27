from django.db import models
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Board, List, Card, Workspace, Checklist, ChecklistItem, Invitation, Notification, Label, Attachment
from .serializers import (
    BoardSerializer, ListSerializer, CardSerializer, RegisterSerializer, 
    WorkspaceSerializer, ChecklistSerializer, ChecklistItemSerializer,
    InvitationSerializer, NotificationSerializer, LabelSerializer, AttachmentSerializer
)
from .utils import send_productive_flow_email
from .ai_service import generate_board_structure, analyze_card_content, chat_with_assistant
from django.contrib.auth.models import User

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
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Board.objects.filter(models.Q(owner=user) | models.Q(members=user)).distinct()

    def perform_create(self, serializer):
        workspace_id = self.request.data.get('workspace_id')
        if workspace_id:
            workspace = Workspace.objects.get(id=workspace_id, members=self.request.user)
            serializer.save(owner=self.request.user, workspace=workspace)
        else:
            serializer.save(owner=self.request.user)

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
        workspace = serializer.save(owner=self.request.user)
        workspace.members.add(self.request.user)

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
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Card.objects.filter(models.Q(list__board__owner=user) | models.Q(list__board__members=user)).distinct()

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
        target_name = invitation.workspace.name if invitation.workspace else invitation.board.title
        accept_url = f"http://localhost:5173/invite/{invitation.token}"
        decline_url = f"http://localhost:5173/invite/{invitation.token}?action=decline"
        
        send_productive_flow_email(
            subject="You're Invited to Join a Workspace",
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
            invitation.workspace.members.add(user)
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
        return Response({
            "id": request.user.id,
            "username": request.user.username,
            "email": request.user.email
        })

    @action(detail=False, methods=['post'])
    def register(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            
            # Welcome Email
            send_productive_flow_email(
                subject="Welcome to Productive Flow 🚀",
                template_name="welcome",
                context={
                    "user_name": user.username,
                    "dashboard_url": "http://localhost:5173/boards-dashboard"
                },
                to_email=user.email
            )

            # Check for pending invitations
            invites = Invitation.objects.filter(email=user.email, status='pending')
            for invite in invites:
                if invite.workspace:
                    invite.workspace.members.add(user)
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

    @action(detail=False, methods=['post'])
    def google_login(self, request):
        email = request.data.get('email')
        name = request.data.get('name', '')
        
        if not email:
            return Response({"error": "Email is required"}, status=status.HTTP_400_BAD_REQUEST)
            
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
                    "dashboard_url": "http://localhost:5173/boards-dashboard"
                },
                to_email=user.email
            )
            
            # Auto-join from pending invites
            invites = Invitation.objects.filter(email=user.email, status='pending')
            for invite in invites:
                if invite.workspace:
                    invite.workspace.members.add(user)
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
