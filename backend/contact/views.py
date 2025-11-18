from django.core.mail import send_mail
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import ContactMessageSerializer

@api_view(["POST"])
def submit_contact(request):
    serializer = ContactMessageSerializer(data=request.data)
    if serializer.is_valid():
        instance = serializer.save()  # Save message to DB

        # Send email to you
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
                from_email=None,  # uses DEFAULT_FROM_EMAIL
                recipient_list=recipient_list,
                fail_silently=False
            )
        except Exception as e:
            print("Email failed:", e)

        return Response({"message": "Message received and emailed!"}, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

