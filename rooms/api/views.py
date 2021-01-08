from rest_framework import status
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.response import Response

from rooms.models import Room
from .serializers import RoomSerializer


class RoomList(ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class RoomDetail(RetrieveAPIView):
    serializer_class = RoomSerializer
    queryset = Room.objects.all()
    lookup_field = 'slug'
