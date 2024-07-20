from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login
from rest_framework import viewsets
from .models import Artist, Album, Song, Podcast, Playlist, MyPodcast
from .serializers import ArtistSerializer, AlbumSerializer, SongSerializer, PodcastSerializer, PlaylistSerializer, MyPodcastSerializer
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.conf import settings
# Create your views here.

def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('home')
    else:
        form = UserCreationForm()
    return render(request, 'registration/signup.html', {'form': form})

def album_songs(request, album_id):
    # Fetch the album
    album = get_object_or_404(Album, id=album_id)
    
    # Fetch songs for the album
    songs = Song.objects.filter(album=album).select_related('artist').values(
        'id', 'title', 'duration', 'media', 'image', 'artist__name'
    )
    
    # Construct the response data
    song_list = [
        {
            'id': song['id'],
            'title': song['title'],
            'duration': song['duration'],
            'media': request.build_absolute_uri(f"{settings.MEDIA_URL}{song['media']}"),
            'image': request.build_absolute_uri(f"{settings.MEDIA_URL}{song['image']}"),
            'artist_name': song['artist__name']  # Include artist name
        }
        for song in songs
    ]

    return JsonResponse(song_list, safe=False)

# API Views
class ArtistViewSet(viewsets.ModelViewSet):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer

class AlbumViewSet(viewsets.ModelViewSet):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

class SongViewSet(viewsets.ModelViewSet):
    queryset = Song.objects.all()
    serializer_class = SongSerializer

class PodcastViewSet(viewsets.ModelViewSet):
    queryset = Podcast.objects.all()
    serializer_class = PodcastSerializer

class PlaylistViewSet(viewsets.ModelViewSet):
    queryset = Playlist.objects.all()
    serializer_class = PlaylistSerializer

class MyPodcastViewSet(viewsets.ModelViewSet):
    queryset = MyPodcast.objects.all()
    serializer_class = MyPodcastSerializer
