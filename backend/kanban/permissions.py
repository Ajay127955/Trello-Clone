from rest_framework import permissions
from .models import WorkspaceMember

class IsWorkspaceManager(permissions.BasePermission):
    """
    Allows access only to workspace managers.
    """
    def has_object_permission(self, request, view, obj):
        # Determine the workspace from the object
        workspace = None
        if hasattr(obj, 'workspace') and obj.workspace:
            workspace = obj.workspace
        elif hasattr(obj, 'board') and obj.board:
            workspace = obj.board.workspace
        elif hasattr(obj, 'list') and obj.list:
            workspace = obj.list.board.workspace
        elif hasattr(obj, 'card') and obj.card:
            workspace = obj.card.list.board.workspace
        
        if not workspace:
            return False
            
        return WorkspaceMember.objects.filter(
            user=request.user, 
            workspace=workspace, 
            role='manager'
        ).exists()

class IsWorkspaceMember(permissions.BasePermission):
    """
    Allows access to any member of the workspace.
    """
    def has_object_permission(self, request, view, obj):
        workspace = None
        if hasattr(obj, 'workspace') and obj.workspace:
            workspace = obj.workspace
        elif hasattr(obj, 'board') and obj.board:
            workspace = obj.board.workspace
        elif hasattr(obj, 'list') and obj.list:
            workspace = obj.list.board.workspace
        elif hasattr(obj, 'card') and obj.card:
            workspace = obj.card.list.board.workspace
            
        if not workspace:
            return False
            
        return WorkspaceMember.objects.filter(
            user=request.user, 
            workspace=workspace
        ).exists()

class CanMoveCard(permissions.BasePermission):
    """
    Only managers or the user assigned to the card can move it.
    """
    def has_object_permission(self, request, view, obj):
        # If it's a card
        from .models import Card
        if isinstance(obj, Card):
            # Check if manager
            is_manager = WorkspaceMember.objects.filter(
                user=request.user, 
                workspace=obj.list.board.workspace, 
                role='manager'
            ).exists()
            if is_manager:
                return True
            # Check if assigned to
            return obj.assigned_to == request.user
        return False
