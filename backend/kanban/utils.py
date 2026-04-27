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
