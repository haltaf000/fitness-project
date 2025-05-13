from rest_framework import generics, permissions
from .models import WeightEntry
from .serializers import WeightEntrySerializer

class WeightEntryListCreateAPI(generics.ListCreateAPIView):
    serializer_class = WeightEntrySerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return WeightEntry.objects.filter(user=self.request.user)

class WeightEntryDetailAPI(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = WeightEntrySerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return WeightEntry.objects.filter(user=self.request.user)