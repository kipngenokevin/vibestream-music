from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Artist(models.Model):
    name = models.CharField(max_length=100)
    bio = models.TextField()

    def __str__(self):
        return self.name

class Album(models.Model):
    title = models.CharField(max_length=100)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)
    release_date = models.DateField()

    def __str__(self):
        return self.title

class Song(models.Model):
    title = models.CharField(max_length=100)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)
    album = models.ForeignKey(Album, on_delete=models.CASCADE, null=True, blank=True)
    duration = models.DurationField()

    def __str__(self):
        return self.title

class Podcast(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    host = models.CharField(max_length=100)
    date = models.DateField()

    def __str__(self):
        return self.title

class Playlist(models.Model):
    title = models.CharField(max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    songs = models.ManyToManyField(Song)

    def __str__(self):
        return self.title

class MyPodcast(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    podcast = models.ForeignKey(Podcast, on_delete=models.CASCADE)
    date_added = models.DateField()

    def __str__(self):
        return f"{self.user.username} - {self.podcast.title}"
