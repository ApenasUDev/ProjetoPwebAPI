# Generated by Django 5.0 on 2023-12-05 11:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0002_alter_usuario_email_alter_usuario_username'),
    ]

    operations = [
        migrations.RenameField(
            model_name='usuario',
            old_name='data_creacao',
            new_name='data_criacao',
        ),
    ]
