# Generated by Django 4.2.7 on 2023-12-01 22:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Yugiohapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuarios',
            name='data_cadastro',
            field=models.DateField(),
        ),
    ]
