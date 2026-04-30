from rest_framework import permissions
from .models import WorkspaceMember

class IsWorkspaceManager(permissions.BasePermission):
    """
    Allows access only to workspace managers or the owner of the object.
    """
    def has_object_permission(self, request, view, obj):
        # 1. Always allow the owner
        if hasattr(obj, 'owner') and obj.owner == request.user:
            return True
        
        # 2. Determine the workspace
        workspace = None
        if hasattr(obj, 'workspace') and obj.workspace:
            workspace = obj.workspace
        elif hasattr(obj, 'board') and obj.board:
            workspace = obj.board.workspace
        elif hasattr(obj, 'list') and obj.list:
            workspace = obj.list.board.workspace
        elif hasattr(obj, 'card') and obj.card:
            workspace = obj.card.list.board.workspace
        
        # If no workspace, fall back to owner check (already done) or board members
        if not workspace:
            # If it's a board, check if they are the board owner
            if hasattr(obj, 'owner') and obj.owner == request.user:
                return True
            return False
            
        return WorkspaceMember.objects.filter(
            user=request.user, 
            workspace=workspace, 
            role='manager'
        ).exists()

class IsWorkspaceMember(permissions.BasePermission):
    """
    Allows access to any member of the workspace, board members, or the owner.
    """
    def has_object_permission(self, request, view, obj):
        # 1. Always allow the owner
        if hasattr(obj, 'owner') and obj.owner == request.user:
            return True

        # 2. Check direct membership (Boards/Workspaces)
        if hasattr(obj, 'members') and obj.members.filter(id=request.user.id).exists():
            return True
            
        # 3. Determine the workspace & board-level membership for child objects
        workspace = None
        board = None

        if hasattr(obj, 'workspace') and obj.workspace:
            workspace = obj.workspace
        elif hasattr(obj, 'board') and obj.board:
            board = obj.board
            workspace = board.workspace
        elif hasattr(obj, 'list') and obj.list:
            board = obj.list.board
            workspace = board.workspace
        elif hasattr(obj, 'card') and obj.card: # This catches Card (obj.list)
            board = obj.list.board
            workspace = board.workspace
        elif hasattr(obj, 'list'): # For Card instance, obj.list is the list
            board = obj.list.board
            workspace = board.workspace

        # 4. Check Board Membership first (more specific)
        if board and board.members.filter(id=request.user.id).exists():
            return True
        if board and board.owner == request.user:
            return True
            
        # 5. Check Workspace Membership (fallback)
        if workspace:
            return WorkspaceMember.objects.filter(
                user=request.user, 
                workspace=workspace
            ).exists()
            
        return False

class CanMoveCard(permissions.BasePermission):
    """
    Only managers, board owners, board members, or the user assigned to the card can move it.
    """
    def has_object_permission(self, request, view, obj):
        from .models import Card
        if isinstance(obj, Card):
            # Check if board owner
            if obj.list.board.owner == request.user:
                return True
            # Check if board member
            if obj.list.board.members.filter(id=request.user.id).exists():
                return True
            # Check if manager
            if obj.list.board.workspace:
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
