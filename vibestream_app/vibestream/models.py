from django.db import models
from django.contrib.auth.models import User

class Artist(models.Model):
    name = models.CharField(max_length=100)
    bio = models.TextField()
    image = models.ImageField(upload_to='artists/', null=True, blank=True)

    def __str__(self):
        return self.name

class Album(models.Model):
    title = models.CharField(max_length=100)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)
    release_date = models.DateField()
    image = models.ImageField(upload_to='albums/', null=True, blank=True)

    def __str__(self):
        return self.title

class Song(models.Model):
    title = models.CharField(max_length=100)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)
    album = models.ForeignKey(Album, on_delete=models.CASCADE, null=True, blank=True)
    duration = models.DurationField()
    image = models.ImageField(upload_to='songs/', null=True, blank=True)
    media = models.FileField(upload_to='songs/media/', null=True, blank=True)

    def __str__(self):
        return self.title

class Podcast(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    host = models.CharField(max_length=100)
    date = models.DateField()
    image = models.ImageField(upload_to='podcasts/', null=True, blank=True)

    def __str__(self):
        return self.title

class Playlist(models.Model):
    title = models.CharField(max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    songs = models.ManyToManyField(Song)
    image = models.ImageField(upload_to='playlists/', null=True, blank=True)

    def __str__(self):
        return self.title

class MyPodcast(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    podcast = models.ForeignKey(Podcast, on_delete=models.CASCADE)
    date_added = models.DateField()

    def __str__(self):
        return f"{self.user.username} - {self.podcast.title}"
