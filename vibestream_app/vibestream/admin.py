from django.contrib import admin
from .models import Artist, Album, Song, Podcast, Playlist, MyPodcast

# Register your models here.
admin.site.register(Artist)
admin.site.register(Album)
admin.site.register(Song)
admin.site.register(Podcast)
admin.site.register(Playlist)
admin.site.register(MyPodcast)
