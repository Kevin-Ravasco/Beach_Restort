from django.db import models


class Room(models.Model):
    name = models.CharField(max_length=20)
    slug = models.SlugField(blank=True)
    image1 = models.ImageField()
    image2 = models.ImageField(blank=True, null=True)
    image3 = models.ImageField(blank=True, null=True)
    price = models.DecimalField(decimal_places=2, max_digits=10)
    size = models.CharField(max_length=20)
    capacity = models.PositiveIntegerField()
    is_featured = models.BooleanField(default=False)
    has_breakfast = models.BooleanField(default=False)
    details = models.TextField()

    def __str__(self):
        return self.name