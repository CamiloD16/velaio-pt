from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Auditoria

class AuthUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "password")

class AuditoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Auditoria
        fields = ("id", "usuario","url","status")