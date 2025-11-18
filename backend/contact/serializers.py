from rest_framework import serializers
from .models import ContactMessage

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ["id", "name", "email", "message", "created_at", "is_read"]
        read_only_fields = ["id", "created_at", "is_read"]

    def validate(self, data):
        """
        Ensure model-level validation (full_clean) runs so model.clean() and validators apply.
        """
        # Create a non-saved model instance and run full_clean()
        instance = ContactMessage(**data)
        try:
            instance.full_clean()
        except ValidationError as e:
            # Convert Django ValidationError to DRF ValidationError shape
            raise serializers.ValidationError(e.message_dict)
        return data
