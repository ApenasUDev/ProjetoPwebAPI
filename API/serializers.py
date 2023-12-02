# serializers.py
from rest_framework import serializers
from Yugiohapp.models import *
class UsuariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuarios
        fields = '__all__'
