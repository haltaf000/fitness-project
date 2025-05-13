from django.db import models
from users.models import CustomUser

class WeightEntry(models.Model):
    user = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='weight_entries'
    )
    weight_kg = models.FloatField(
        help_text="Weight in kilograms"
    )
    body_fat_percentage = models.FloatField(
        null=True,
        blank=True,
        help_text="Optional body fat percentage"
    )
    date = models.DateTimeField(
        auto_now_add=True,
        help_text="Date of measurement"
    )

    class Meta:
        ordering = ['-date']
        verbose_name_plural = "Weight Entries"
        indexes = [
            models.Index(fields=['user', 'date']),
        ]

    def __str__(self):
        return f"{self.user}: {self.weight_kg}kg ({self.date})"