from django.db import models
from pygments.lexers import get_lexer_by_name
from pygments.formatters.html import HtmlFormatter
from pygments import highlight

class Usuario(models.Model):
    data_cadastro = models.DateTimeField(auto_now_add=True)
    nome_usuario = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    senha = models.CharField(max_length=255)  # Ajuste o tamanho conforme necessário
    owner = models.ForeignKey('auth.User', related_name='usuario', on_delete=models.CASCADE)

    class Meta:
        ordering = ['data_cadastro']



    def __str__(self) -> str:
        return self.nome_usuario
