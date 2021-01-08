from django.db.models.signals import pre_save, post_save
from django.utils.text import slugify

from .models import Room


def create_slug(instance, sender, *args, **kwargs):
    if not instance.slug:
        slug = slugify(instance.name)
        count = 0
        if Room.objects.filter(slug=slug).exists():
            count +=1
            slug = slug + '-' + str(count)
        instance.slug = slug


pre_save.connect(create_slug, sender=Room)