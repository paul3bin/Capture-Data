from django.shortcuts import render
from rest_framework import viewsets
from . import serializers, models
# Create your views here.

class DataViewSet(viewsets.ModelViewSet):
    queryset = models.CaptureData.objects.all()
    serializer_class = serializers.CaptureDataSerializer