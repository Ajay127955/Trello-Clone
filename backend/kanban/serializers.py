from rest_framework import serializers
from .models import Board, ProjectCategory, Task, TaskAssignment, Workspace, WorkspaceMember, Invitation, Notification, Activity, Presence
from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class TaskAssignmentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = TaskAssignment
        fields = ['id', 'user', 'status', 'updated_at']

class TaskSerializer(serializers.ModelSerializer):
    assigned_users = UserSerializer(many=True, read_only=True)
    assignments = TaskAssignmentSerializer(many=True, read_only=True)
    created_by = UserSerializer(read_only=True)
    # Write-only field: list of user IDs to assign
    assigned_user_ids = serializers.ListField(
        child=serializers.IntegerField(), write_only=True, required=False, default=list
    )

    class Meta:
        model = Task
        fields = [
            'id', 'title', 'description', 'category', 'assigned_users', 
            'assignments', 'created_by', 'created_at', 'updated_at',
            'assigned_user_ids'
        ]

    def create(self, validated_data):
        assigned_user_ids = validated_data.pop('assigned_user_ids', [])
        task = super().create(validated_data)
        if assigned_user_ids:
            users = User.objects.filter(id__in=assigned_user_ids)
            task.assigned_users.set(users)
        return task

    def update(self, instance, validated_data):
        assigned_user_ids = validated_data.pop('assigned_user_ids', None)
        task = super().update(instance, validated_data)
        if assigned_user_ids is not None:
            users = User.objects.filter(id__in=assigned_user_ids)
            task.assigned_users.set(users)
        return task

class ProjectCategorySerializer(serializers.ModelSerializer):
    tasks = TaskSerializer(many=True, read_only=True)
    
    class Meta:
        model = ProjectCategory
        fields = ['id', 'name', 'board', 'position', 'tasks']

class BoardSerializer(serializers.ModelSerializer):
    categories = ProjectCategorySerializer(many=True, read_only=True)
    owner = UserSerializer(read_only=True)
    members = UserSerializer(many=True, read_only=True)
    
    class Meta:
        model = Board
        fields = ['id', 'title', 'owner', 'members', 'workspace', 'created_at', 'categories']

class WorkspaceMemberSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = WorkspaceMember
        fields = ['id', 'user', 'role', 'joined_at']

class WorkspaceSerializer(serializers.ModelSerializer):
    members = WorkspaceMemberSerializer(source='workspacemember_set', many=True, read_only=True)
    owner = UserSerializer(read_only=True)

    class Meta:
        model = Workspace
        fields = ['id', 'name', 'description', 'owner', 'members', 'created_at']

class ActivitySerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    task_title = serializers.ReadOnlyField(source='task.title')
    
    class Meta:
        model = Activity
        fields = [
            'id', 'user', 'board', 'task', 'task_title', 
            'action_type', 'from_state', 'to_state', 'timestamp'
        ]

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = ['username', 'password', 'email']

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Workspace.objects.create(name=f"{user.username}'s Workspace", owner=user)
        return user

class EmailOrUsernameTokenSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        identifier = attrs.get('username', '')
        if identifier and '@' in identifier:
            try:
                user = User.objects.get(email=identifier)
                attrs['username'] = user.username
            except User.DoesNotExist:
                pass
        return super().validate(attrs)
class InvitationSerializer(serializers.ModelSerializer):
    sender = UserSerializer(read_only=True)
    class Meta:
        model = Invitation
        fields = ['id', 'sender', 'email', 'workspace', 'board', 'token', 'status', 'created_at']

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ['id', 'user', 'message', 'type', 'read', 'created_at']

class PresenceSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = Presence
        fields = ['user', 'is_online', 'last_seen', 'current_board']

from rest_framework_simplejwt.views import TokenObtainPairView

class EmailOrUsernameTokenView(TokenObtainPairView):
    serializer_class = EmailOrUsernameTokenSerializer
