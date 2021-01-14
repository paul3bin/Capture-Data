from django.shortcuts import render
from rest_framework import viewsets
from . import serializers, models
from django.contrib.auth.models import User
from rest_framework.permissions import IsAdminUser
# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    permission_classes = (IsAdminUser, )


class DataViewSet(viewsets.ModelViewSet):
    queryset = models.CaptureData.objects.all()
    serializer_class = serializers.CaptureDataSerializer