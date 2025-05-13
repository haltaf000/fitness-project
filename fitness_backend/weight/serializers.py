from rest_framework import serializers
from .models import WeightEntry

class WeightEntrySerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    
    class Meta:
        model = WeightEntry
        fields = '__all__'