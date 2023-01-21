from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from .serializers import AuthUserSerializer, AuditoriaSerializer
from .models import Auditoria

class ProjectViewSetUser(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = AuthUserSerializer

class ProjectViewSetAuditoria(viewsets.ModelViewSet):
    queryset = Auditoria.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = AuditoriaSerializer