from django.contrib import admin
from .models import WeightEntry

@admin.register(WeightEntry)
class WeightEntryAdmin(admin.ModelAdmin):
    list_display = ('user', 'weight_kg', 'body_fat_percentage', 'date')
    list_filter = ('date',)
    search_fields = ('user__username',)