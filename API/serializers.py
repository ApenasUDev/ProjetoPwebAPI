from rest_framework import serializers
from .models import Usuario, Favorito, Avaliacao

class FavoritoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorito
        fields = '__all__'

class AvaliacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Avaliacao
        fields = '__all__'

class UsuarioSerializer(serializers.ModelSerializer):
    favoritos = FavoritoSerializer(many=True, read_only=True)
    avaliacoes = AvaliacaoSerializer(many=True, read_only=True)

    class Meta:
        model = Usuario
        fields = ['id','username','email','password','data_criacao','favoritos','avaliacoes']