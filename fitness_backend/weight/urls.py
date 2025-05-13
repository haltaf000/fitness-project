from django.urls import path
from .views import WeightEntryListCreateAPI, WeightEntryDetailAPI

urlpatterns = [
    path('', WeightEntryListCreateAPI.as_view(), name='weight-list'),
    path('<int:pk>/', WeightEntryDetailAPI.as_view(), name='weight-detail'),
]