from django.urls import path
from API import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns =[
    path('usuarios/',views.UsuarioList.as_view()),
    path('usuarios/<int:pk>/',views.UsuarioDetail.as_view()),
    path('users/',views.UserList.as_view()),
    path('users/<int:pk>/',views.UserDetail.as_view()),
]
urlpatterns = format_suffix_patterns(urlpatterns)