from rest_framework import serializers
from .models import Run

class RunSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    
    class Meta:
        model = Run
        fields = '__all__'