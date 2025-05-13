from django.urls import path
from .views import UserRegistrationAPI, UserProfileAPI

urlpatterns = [
    path('register/', UserRegistrationAPI.as_view(), name='user-register'),
    path('me/', UserProfileAPI.as_view(), name='user-profile'),
]