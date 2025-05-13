from django.contrib import admin
from .models import Run

@admin.register(Run)
class RunAdmin(admin.ModelAdmin):
    list_display = ('user', 'run_type', 'distance_km', 'date')
    list_filter = ('run_type', 'date')
    search_fields = ('user__username', 'notes')