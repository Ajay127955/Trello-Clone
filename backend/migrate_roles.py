import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from kanban.models import Workspace, WorkspaceMember

def migrate_roles():
    print("Migrating roles...")
    workspaces = Workspace.objects.all()
    for ws in workspaces:
        # 1. Set owner as manager
        member, created = WorkspaceMember.objects.get_or_create(
            user=ws.owner,
            workspace=ws,
            defaults={'role': 'manager'}
        )
        if not created and member.role != 'manager':
            member.role = 'manager'
            member.save()
            print(f"Updated owner {ws.owner.username} as manager for workspace {ws.name}")
        elif created:
            print(f"Created manager record for owner {ws.owner.username} in workspace {ws.name}")
        
        # 2. handle board members if any (boards still have a members field)
        for board in ws.boards.all():
            for user in board.members.all():
                m, created = WorkspaceMember.objects.get_or_create(
                    user=user,
                    workspace=ws,
                    defaults={'role': 'member'}
                )
                if created:
                    print(f"Added member {user.username} to workspace {ws.name} from board {board.title}")

if __name__ == "__main__":
    migrate_roles()
