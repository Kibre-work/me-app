# backend/contact/views.py
from django.core.mail import send_mail
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import ContactMessageSerializer
from django.conf import settings
import logging

# Optional: configure logger for email errors
logger = logging.getLogger(__name__)

@api_view(["POST"])
def submit_contact(request):
    serializer = ContactMessageSerializer(data=request.data)
    
    if serializer.is_valid():
        # Save message to DB
        instance = serializer.save()

        # Prepare email
        subject = f"New Contact Message from {instance.name}"
        message_body = f"""
Name: {instance.name}
Email: {instance.email}

Message:
{instance.message}
"""
        recipient_list = ["senaitagumasie1@gmail.com"]  # Your email

        try:
            send_mail(
                subject=subject,
                message=message_body,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=recipient_list,
                fail_silently=False
            )
        except Exception as e:
            # Log the email error
            logger.error(f"Email failed to send: {e}")
            print(f"Email failed: {e}")

        return Response(
            {"message": "Message received and emailed!"},
            status=status.HTTP_201_CREATED
        )

    # Flatten serializer errors for frontend
    errors = {k: " ".join(v) for k, v in serializer.errors.items()}
    return Response(errors, status=status.HTTP_400_BAD_REQUEST)
