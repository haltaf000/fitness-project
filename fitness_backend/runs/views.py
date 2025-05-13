from rest_framework import generics, permissions
from .models import Run
from .serializers import RunSerializer

class RunListCreateAPI(generics.ListCreateAPIView):
    serializer_class = RunSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Run.objects.filter(user=self.request.user)

class RunDetailAPI(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = RunSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Run.objects.filter(user=self.request.user)