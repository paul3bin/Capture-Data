from rest_framework import serializers
from . import models

class CaptureDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CaptureData
        fields = ('first_name', 'last_name', 'email')