from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.conf import settings

def send_productive_flow_email(subject, template_name, context, to_email):
    """
    Utility to send branded HTML emails.
    """
    html_content = render_to_string(f'emails/{template_name}.html', context)
    text_content = strip_tags(html_content)
    
    email = EmailMultiAlternatives(
        subject,
        text_content,
        settings.DEFAULT_FROM_EMAIL or 'noreply@productiveflow.com',
        [to_email]
    )
    email.attach_alternative(html_content, "text/html")
    try:
        email.send()
        return True
    except Exception as e:
        print(f"Error sending email: {e}")
        return False

def broadcast_kanban_event(board_id, msg_type, message, data=None):
    """
    Broadcasting helper for real-time updates.
    """
    from channels.layers import get_channel_layer
    from asgiref.sync import async_to_sync
    
    channel_layer = get_channel_layer()
    group_name = f'board_{board_id}'
    
    try:
        async_to_sync(channel_layer.group_send)(
            group_name,
            {
                'type': 'kanban_message',
                'msg_type': msg_type,
                'message': message,
                'data': data or {}
            }
        )
    except Exception as e:
        print(f"Failed to broadcast message to {group_name}: {e}")
