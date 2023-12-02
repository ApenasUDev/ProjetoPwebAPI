
from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Usuarios
from API.serializers import UsuariosSerializer

class UsuariosViewSet(viewsets.ModelViewSet):
    queryset = Usuarios.objects.all()
    serializer_class = UsuariosSerializer