from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UsuariosViewSet

router = DefaultRouter()
router.register(r'usuarios', UsuariosViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    # Adicione outras URLs de autenticação aqui
]