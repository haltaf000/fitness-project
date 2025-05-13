from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    list_display = ('username', 'email', 'height', 'birth_date')
    fieldsets = UserAdmin.fieldsets + (
        ('Fitness Data', {'fields': ('height', 'birth_date')}),
    )

admin.site.register(CustomUser, CustomUserAdmin)