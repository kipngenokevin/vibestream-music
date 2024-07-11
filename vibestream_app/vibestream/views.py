from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login
from rest_framework import viewsets
from .models import Artist, Album, Song, Podcast, Playlist, MyPodcast
from .serializers import ArtistSerializer, AlbumSerializer, SongSerializer, PodcastSerializer, PlaylistSerializer, MyPodcastSerializer

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
