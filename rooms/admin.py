from django.contrib import admin


from django_summernote.admin import SummernoteModelAdmin
from .models import Room


class RoomAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'size', 'capacity', 'is_featured', 'has_breakfast']
    list_filter = ['is_featured', 'has_breakfast']
    exclude = ['slug']


admin.site.register(Room, RoomAdmin)
