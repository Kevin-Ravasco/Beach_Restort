# Generated by Django 3.1.4 on 2020-12-20 06:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('rooms', '0003_room_slug'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='room',
            name='category',
        ),
        migrations.DeleteModel(
            name='Category',
        ),
    ]
