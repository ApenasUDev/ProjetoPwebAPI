from django.db import models

# Create your models here.

class Base(models.Model):
    criacao = models.DateField(auto_now_add=True)
    atualizacao = models.DateField(auto_now_add=True)
    
    class Meta:
        abstract = True
    
class Usuario(Base):
    username = models.CharField(max_length=255,unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=25)

    def __str__(self):
        return self.username
    
class Favorito(Base):
    usuario = models.ForeignKey(Usuario,on_delete=models.CASCADE)
    id_card = models.IntegerField()
    data_favorito = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return self.usuario.username
    
class Avaliacao(Base):
    usuario = models.ForeignKey(Usuario,on_delete=models.CASCADE)
    id_card = models.IntegerField()
    avaliacao = models.DecimalField(max_digits=1,decimal_places=1)
    
    def __str__(self) -> str:
        return self.usuario.username