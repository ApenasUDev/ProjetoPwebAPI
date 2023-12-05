from django.urls import path
from .views import UsuarioListCreateView, UsuarioDetailView

urlpatterns = [
    path('usuarios/', UsuarioListCreateView, name='usuario-list-create'),
    path('usuarios/<int:pk>/', UsuarioDetailView, name='usuario-detail'),
]