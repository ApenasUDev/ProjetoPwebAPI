from rest_framework import serializers
from API.models import Usuario
from django.contrib.auth.models import User
class UsuarioSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    nome_usuario = serializers.CharField(max_length=255)
    email = serializers.CharField(max_length=255)
    senha = serializers.CharField(max_length=255)
    
    class Meta:
        model= Usuario
        fields = ['id','nome_usuario','email']
    def create(self, validated_data):
        return Usuario.objects.create(**validated_data)
    
    def update(self,instance, validated_data):
        instance.nome_usuario = validated_data.get('nome_usuario',instance.nome_usuario)
        instance.email = validated_data.get('email',instance.email)
        instance.senha = validated_data.get('senha',instance.senha)
        instance.save()
        return instance
class UserSerializer(serializers.ModelSerializer):
    usuario = serializers.PrimaryKeyRelatedField(many=True,queryset = Usuario.objects.all())
    owner = serializers.ReadOnlyField(source='owner.username')
    class Meta:
        model = User
        fields = ['id','username','usuario','owner']