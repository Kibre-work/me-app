from django.db import models
from django.db import models
from django.core.validators import EmailValidator
from django.core.exceptions import ValidationError
import re

def validate_name(value):
    """Allow only letters and spaces (2-50 char)"""
    if not re.match(r'^[A-Za-z\s]{2,50}$', value):
        raise ValidationError(
            "Name must contain only letters and spaces (2–50 characters)."
        )

class ContactMessage(models.Model):
    name = models.CharField(max_length=50, validators=[validate_name])
    email = models.EmailField(validators=[EmailValidator()])
    message = models.TextField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "Contact Message"
        verbose_name_plural = "Contact Messages"

    def __str__(self):
        return f"{self.name} ({self.email})"

    def clean(self):
        super().clean()
        stripped = (self.message or "").strip()
        if len(stripped) < 10:
            raise ValidationError({"message": "Message must be at least 10 characters long."})
        if len(stripped) > 500:
            raise ValidationError({"message": "Message cannot exceed 500 characters."})

# Create your models here.
