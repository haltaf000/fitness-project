from django.urls import path
from .views import RunListCreateAPI, RunDetailAPI

urlpatterns = [
    path('', RunListCreateAPI.as_view(), name='run-list'),
    path('<int:pk>/', RunDetailAPI.as_view(), name='run-detail'),
]