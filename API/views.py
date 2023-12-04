from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status,generics
from rest_framework import permissions
from API.models import Usuario
from API.serializers import UsuarioSerializer,UserSerializer
from django.http import Http404
from django.contrib.auth.models import User
from API.permissions import IsOwnerOrReadOnly
class UsuarioList(APIView):
    """
    Listar todos os usuários, or criar um novo usuário.
    """
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly]
    def get(self,request,format=None):
        usuario = Usuario.objects.all()
        serializer = UsuarioSerializer(usuario,many=True)
        return Response(serializer.data)
    
    def post(self,request,format=None):
        serializer = UsuarioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status= status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def perform_create(self,serializer):
        serializer.save(owner = self.request.user)
class UsuarioDetail(APIView):
    """
    Recuperar, atualizar ou excluir um usuário.
    """
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly]
    def get_object(self,pk):
        try:
            return Usuario.objects.get(pk=pk)
        except Usuario.DoesNotExist:
            return Http404
        
    def get(self,request,pk,format=None):
        usuario = self.get_object(pk)
        serializer = UsuarioSerializer(usuario,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self,request,pk,format=None):
        usuario = self.get_object(pk)
        usuario.delete()
        return Response(status= status.HTTP_204_NO_CONTENT)
            
class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    