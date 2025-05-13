from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    height = models.FloatField(
        null=True,
        blank=True,
        help_text="Height in centimeters"
    )
    birth_date = models.DateField(
        null=True,
        blank=True,
        help_text="Required for age-related calculations"
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.username