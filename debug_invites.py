import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from kanban.models import Invitation, Board

invites = Invitation.objects.all().order_by('-created_at')[:5]
print("Recent Invitations:")
for inv in invites:
    print(f"ID: {inv.id}, Email: {inv.email}, Board: {inv.board.title if inv.board else 'NONE'}, Status: {inv.status}")
