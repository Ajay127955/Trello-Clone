import uuid
from django.db import models
from django.contrib.auth.models import User

class Workspace(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='owned_workspaces')
    members = models.ManyToManyField(User, through='WorkspaceMember', related_name='workspaces', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class WorkspaceMember(models.Model):
    ROLE_CHOICES = [
        ('manager', 'Manager'),
        ('member', 'Member'),
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    workspace = models.ForeignKey(Workspace, on_delete=models.CASCADE)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='member')
    joined_at = models.DateTimeField(auto_now_add=True)
    last_active = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('user', 'workspace')

    def __str__(self):
        return f"{self.user.username} - {self.workspace.name} ({self.role})"

class Board(models.Model):
    title = models.CharField(max_length=255)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='owned_boards')
    members = models.ManyToManyField(User, related_name='boards', blank=True)
    workspace = models.ForeignKey(Workspace, on_delete=models.CASCADE, related_name='boards', null=True, blank=True)
    background_color = models.CharField(max_length=50, null=True, blank=True)
    background_image = models.CharField(max_length=500, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class ProjectCategory(models.Model):
    name = models.CharField(max_length=255)
    board = models.ForeignKey(Board, on_delete=models.CASCADE, related_name='categories')
    position = models.IntegerField(default=0)

    class Meta:
        ordering = ['position']
        verbose_name_plural = "Project Categories"

    def __str__(self):
        return f"{self.board.title} - {self.name}"

class Task(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    category = models.ForeignKey(ProjectCategory, on_delete=models.CASCADE, related_name='tasks')
    assigned_users = models.ManyToManyField(User, related_name='assigned_tasks', blank=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='created_tasks')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class TaskAssignment(models.Model):
    STATUS_CHOICES = [
        ('todo', 'To Do'),
        ('doing', 'Doing'),
        ('completed', 'Completed'),
    ]
    task = models.ForeignKey(Task, on_delete=models.CASCADE, related_name='assignments')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='task_assignments')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='todo')
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('task', 'user')

    def __str__(self):
        return f"{self.user.username} - {self.task.title} ({self.status})"

class Activity(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    board = models.ForeignKey(Board, on_delete=models.CASCADE, related_name='activities', null=True, blank=True)
    task = models.ForeignKey(Task, on_delete=models.CASCADE, related_name='activities', null=True, blank=True)
    action_type = models.CharField(max_length=100) # e.g. "moved", "commented", "assigned"
    from_state = models.CharField(max_length=50, blank=True, null=True)
    to_state = models.CharField(max_length=50, blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-timestamp']

    def __str__(self):
        return f"{self.user.username} {self.action_type} {self.task.title if self.task else ''}"

class Invitation(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('accepted', 'Accepted'),
        ('declined', 'Declined'),
    ]
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sent_invitations')
    email = models.EmailField()
    workspace = models.ForeignKey(Workspace, on_delete=models.CASCADE, related_name='invitations', null=True, blank=True)
    board = models.ForeignKey(Board, on_delete=models.CASCADE, related_name='invitations', null=True, blank=True)
    token = models.UUIDField(default=uuid.uuid4, unique=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notifications')
    message = models.TextField()
    type = models.CharField(max_length=50)
    read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

class OTPVerification(models.Model):
    email = models.EmailField(unique=True)
    otp = models.CharField(max_length=6)
    created_at = models.DateTimeField(auto_now_add=True)

class Presence(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='presence')
    is_online = models.BooleanField(default=False)
    last_seen = models.DateTimeField(auto_now=True)
    current_board = models.ForeignKey(Board, on_delete=models.SET_NULL, null=True, blank=True)
