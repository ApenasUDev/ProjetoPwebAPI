from rest_framework import generics
from .models import Usuario, Favorito, Avaliacao
from .serializers import UsuarioSerializer, FavoritoSerializer, AvaliacaoSerializer

class UsuarioListCreateView(generics.ListCreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class UsuarioDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer