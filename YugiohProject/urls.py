"""
URL configuration for YugiorProject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from yugiohapp import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('visucards/',views.visucards,name='visucards'),
    path('buscarcards/',views.buscar_card,name='buscarcards'),
    path('users/register/',views.register,name='register-users'),
    path('users/login/',views.login,name="login"),
    path('users/dados-do-usuario/', views.dados_do_usuario, name='dados_do_usuario'),
    path('favoritar-card/', views.FavoritarCard, name='favoritar-card'),
    path('favoritos/', views.visufavoritos, name='favoritos'),
    path('desfavoritar-card/', views.desfavoritar_card, name='desfavoritar_card'),
    ]

