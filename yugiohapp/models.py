from django.db import models

# Create your models here.

class Usuario(models.Model):
  
    username = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    password_confirm = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    token = models.CharField(max_length=255)
class Favorito(models.Model):
    usuario = models.ForeignKey(Usuario,on_delete=models.CASCADE)
    id_card = models.IntegerField()
