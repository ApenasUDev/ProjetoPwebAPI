from django.db import models

# Create your models here.
class Usuarios(models.Model):
    nome_usuario = models.CharField(max_length=255,unique=True)
    email = models.CharField(max_length=255,unique=True)
    senha = models.CharField(max_length=25)
    data_cadastro = models.DateField(auto_created=True)
    img_perfil = models.ImageField()
    def __str__(self) -> str:
        return self.nome_usuario
class Favoritos(models.Model):
    id_card = models.IntegerField()
    nome_card = models.CharField(max_length=125)
    
    def __str__(self) -> str:
        return self.nome_card
class Avaliacao(models.Model):
    usuario = models.OneToOneField(Usuarios,on_delete=True)
    id_card = models.IntegerField()
    nome_card = models.CharField(max_length=125)
    estrelas = models.IntegerField(min=1,max=5)
    
    def __str__(self) -> str:
        return self.nome_card
    