import threading
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail
from .models import Card, Notification
from .utils import send_productive_flow_email

@receiver(post_save, sender=Card)
def handle_card_notifications(sender, instance, created, **kwargs):
    """
    Trigger emails and in-app notifications for card events.
    """
    if created:
        # For creation, handled by perform_create or similar
        pass
    else:
        # Check if assigned_to changed
        # Note: This is simplified. In production, use __init__ tracker or similar.
        pass

# We will trigger the email manually from the ViewSet for assignment
# to avoid signal complexities with many-to-many or related fields not yet saved.
# But we can use signals for simpler things.

def send_async_email(subject, template_name, context, to_email):
    """
    Wrapper for async email sending.
    """
    thread = threading.Thread(
        target=send_productive_flow_email,
        args=(subject, template_name, context, to_email)
    )
    thread.start()
