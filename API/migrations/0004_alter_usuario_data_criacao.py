# Generated by Django 5.0 on 2023-12-05 11:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0003_rename_data_creacao_usuario_data_criacao'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuario',
            name='data_criacao',
            field=models.DateField(auto_now_add=True),
        ),
    ]
