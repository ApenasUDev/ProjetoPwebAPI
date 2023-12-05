from rest_framework import serializers
from .models import Usuario, Favorito, Avaliacao

class AvaliacaoSerializer(serializers.ModelSerializer):
    class Meta:

        model = Avaliacao
        fields = (
            'id',
            'id_card',
            'usuario',
            'criacao',
            'avaliacao',
            'atualizacao',
            'ativo'
        )
        
class FavoritoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorito
        fields = (
            'id',
            'id_card',
            'usuario',
            'criacao',
            'ativo'
        )

class UsuarioSerializer(serializers.ModelSerializer):
    favoritos = FavoritoSerializer(many=True, read_only=True)
    avaliacoes = AvaliacaoSerializer(many=True, read_only=True)

    class Meta:

        model = Usuario
        fields = (
            'id',
            'username',
            'email',
            'password',
            'criacao',
            'favoritos',
            'avaliacoes'
        )