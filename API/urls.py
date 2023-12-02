from django.urls import path
from .views import novo_usuario,list_usuario

urlpatterns = [
    path('novousuario/',novo_usuario.as_view()),
    path('usuarios/',list_usuario.as_view()),
]