from rest_framework import serializers
from .models import Board, List, Card, Workspace, Checklist, ChecklistItem, Invitation, Notification, Label, Attachment
from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth import authenticate

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class AttachmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attachment
        fields = ['id', 'file', 'file_name', 'created_at']

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ['id', 'user', 'message', 'type', 'read', 'created_at']

class InvitationSerializer(serializers.ModelSerializer):
    sender = UserSerializer(read_only=True)
    workspace_name = serializers.CharField(source='workspace.name', read_only=True)
    board_name = serializers.CharField(source='board.title', read_only=True)

    class Meta:
        model = Invitation
        fields = ['id', 'sender', 'email', 'workspace', 'board', 'message', 'token', 'status', 'created_at', 'workspace_name', 'board_name']
        read_only_fields = ['token', 'status']

class ChecklistItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChecklistItem
        fields = ['id', 'text', 'completed', 'position', 'checklist']

class ChecklistSerializer(serializers.ModelSerializer):
    items = ChecklistItemSerializer(many=True, read_only=True)

    class Meta:
        model = Checklist
        fields = ['id', 'title', 'items', 'card']

class LabelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Label
        fields = ['id', 'title', 'color', 'board']

class CardSerializer(serializers.ModelSerializer):
    checklists = ChecklistSerializer(many=True, read_only=True)
    attachments = AttachmentSerializer(many=True, read_only=True)
    assigned_members = UserSerializer(many=True, read_only=True)
    assigned_member_ids = serializers.PrimaryKeyRelatedField(
        many=True, queryset=User.objects.all(), write_only=True, source='assigned_members', required=False
    )
    labels = LabelSerializer(many=True, read_only=True)
    label_ids = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Label.objects.all(), write_only=True, source='labels', required=False
    )
    
    # Stats for card preview
    checklist_stats = serializers.SerializerMethodField()

    class Meta:
        model = Card
        fields = [
            'id', 'title', 'description', 'list', 'position', 
            'checklists', 'attachments', 'assigned_members', 'assigned_member_ids',
            'labels', 'label_ids', 'due_date', 'created_at', 'updated_at',
            'checklist_stats'
        ]

    def get_checklist_stats(self, obj):
        all_items = ChecklistItem.objects.filter(checklist__card=obj)
        total = all_items.count()
        completed = all_items.filter(completed=True).count()
        return {"total": total, "completed": completed}

class ListSerializer(serializers.ModelSerializer):
    cards = CardSerializer(many=True, read_only=True)

    class Meta:
        model = List
        fields = ['id', 'title', 'board', 'position', 'cards', 'wip_limit', 'color']

class WorkspaceSerializer(serializers.ModelSerializer):
    members = UserSerializer(many=True, read_only=True)
    owner = UserSerializer(read_only=True)

    class Meta:
        model = Workspace
        fields = ['id', 'name', 'description', 'owner', 'members', 'created_at']

class BoardSerializer(serializers.ModelSerializer):
    lists = ListSerializer(many=True, read_only=True)
    owner = UserSerializer(read_only=True)
    members = UserSerializer(many=True, read_only=True)
    workspace = WorkspaceSerializer(read_only=True)
    workspace_id = serializers.IntegerField(write_only=True, required=False, allow_null=True)

    class Meta:
        model = Board
        fields = ['id', 'title', 'owner', 'members', 'workspace', 'workspace_id', 'created_at', 'lists', 'background_color', 'background_image']

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'password', 'email']
        extra_kwargs = {'username': {'required': False}}

    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("A user with this email already exists.")
        return value

    def create(self, validated_data):
        # Use email as username if no username provided
        email = validated_data.get('email', '')
        username = validated_data.get('username') or email.split('@')[0] + '_' + User.objects.count().__str__()
        user = User.objects.create_user(
            username=username,
            password=validated_data['password'],
            email=email
        )
        # Create a default workspace for the new user
        from .models import Workspace
        Workspace.objects.create(name=f"{username}'s Workspace", owner=user)
        return user


class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'first_name', 'last_name']
        extra_kwargs = {
            'username': {'required': False},
            'email': {'required': False},
        }

class EmailOrUsernameTokenSerializer(TokenObtainPairSerializer):
    """
    Custom JWT serializer that accepts either username or email as the login identifier.
    The frontend sends { username: <email_or_username>, password }.
    If the value looks like an email, we resolve it to the actual Django username.
    """
    def validate(self, attrs):
        identifier = attrs.get('username', '')
        # If the identifier looks like an email, try to resolve it to the real username
        if identifier and '@' in identifier:
            try:
                user = User.objects.get(email=identifier)
                attrs['username'] = user.username
            except User.DoesNotExist:
                # We don't raise an error here to prevent email enumeration
                # and to ensure the base class handles the failed authentication (returning 401)
                pass
        return super().validate(attrs)


class EmailOrUsernameTokenView(TokenObtainPairView):
    serializer_class = EmailOrUsernameTokenSerializer
