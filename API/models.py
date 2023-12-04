from django.db import models

# Create your models here.
class Usuario(models.Model):
    username = models.CharField(max_length=255,unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=25)
    data_creacao = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.username
    
class Favorito(models.Model):
    usuario = models.ForeignKey(Usuario,on_delete=models.CASCADE)
    id_card = models.IntegerField()
    data_favorito = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return self.usuario.username
    
class Avaliacao(models.Model):
    usuario = models.ForeignKey(Usuario,on_delete=models.CASCADE)
    id_card = models.IntegerField()
    data_avaliacao = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return self.usuario.username