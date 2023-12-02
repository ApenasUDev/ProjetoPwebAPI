# serializers.py
from rest_framework import serializers
from .models import *
class UsuariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuarios
        fields = '__all__'
        
class FavoritosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favoritos
        fields = '__all__'
        
class AvaliacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model= Avaliacao
        fields = '__all__'