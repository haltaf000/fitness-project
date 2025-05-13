from django.db import models
from users.models import CustomUser

class Run(models.Model):
    RUN_TYPE_CHOICES = [
        ('MILE', 'One Mile Run'),
        ('INTERVAL', 'Interval Training'),
        ('LONG', 'Long Distance'),
        ('OTHER', 'Other'),
    ]

    user = models.ForeignKey(
        CustomUser,
        on_delete=models.CASCADE,
        related_name='runs'
    )
    run_type = models.CharField(
        max_length=20,
        choices=RUN_TYPE_CHOICES,
        default='MILE'
    )
    distance_km = models.FloatField(
        help_text="Distance in kilometers"
    )
    duration_minutes = models.FloatField(
        help_text="Duration in minutes"
    )
    date = models.DateTimeField(
        auto_now_add=True,
        help_text="Date of the run"
    )
    notes = models.TextField(
        blank=True,
        null=True,
        help_text="Additional comments"
    )

    class Meta:
        ordering = ['-date']
        indexes = [
            models.Index(fields=['user', 'date']),
        ]

    def __str__(self):
        return f"{self.user}: {self.run_type} ({self.date})"