# Generated by Django 3.1.4 on 2020-12-20 06:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rooms', '0002_auto_20201220_0920'),
    ]

    operations = [
        migrations.AddField(
            model_name='room',
            name='slug',
            field=models.SlugField(blank=True),
        ),
    ]
