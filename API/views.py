from rest_framework import generics
from .models import *
from .serializers import UsuariosSerializer,FavoritosSerializer,AvaliacaoSerializer

class novo_usuario(generics.CreateAPIView):
    serializer_class = UsuariosSerializer
    
    def get_queryset(self):
        queryset = Usuarios.objects.all()
        favoritos = self.request.query_parems.get('favoritos')
        if favoritos is not None:
            queryset = queryset.filter(usuario=favoritos)
        return queryset
class list_usuario(generics.ListAPIView):
    serializer_class = UsuariosSerializer
    queryset = Usuarios.objects.all()
    
