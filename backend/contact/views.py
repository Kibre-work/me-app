# backend/contact/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import ContactMessageSerializer
from django.conf import settings
import logging
import resend

# Optional: configure logger for email errors
logger = logging.getLogger(__name__)

@api_view(["POST"])
def submit_contact(request):
    serializer = ContactMessageSerializer(data=request.data)
    
    if serializer.is_valid():
        # Save message to DB
        instance = serializer.save()

        # Send email using Resend
        try:
            resend.api_key = settings.RESEND_API_KEY
            
            params = {
                "from": "onboarding@resend.dev",  # Use this for testing, or your verified domain
                "to": ["senaitagumasie1@gmail.com"],
                "subject": f"New Contact Message from {instance.name}",
                "html": f"""
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Name:</strong> {instance.name}</p>
                    <p><strong>Email:</strong> {instance.email}</p>
                    <p><strong>Message:</strong></p>
                    <p>{instance.message}</p>
                """
            }
            
            email = resend.Emails.send(params)
            logger.info(f"Email sent successfully: {email}")
            
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