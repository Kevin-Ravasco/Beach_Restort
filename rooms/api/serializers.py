from rest_framework.serializers import ModelSerializer

from rooms.models import Room


class RoomSerializer(ModelSerializer):
    class Meta:
        model = Room
        fields = ['id', 'name', 'slug', 'image1', 'image2', 'image3', 'price', 'size', 'capacity', 'is_featured',
                  'has_breakfast', 'details']
