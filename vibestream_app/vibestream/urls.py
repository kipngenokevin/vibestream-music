from django.urls import path, include
from . import views
from django.contrib.auth import views as auth_views
from rest_framework.routers import DefaultRouter

# Create a router and register out viewsets with it
router = DefaultRouter()
router.register(r'artists', views.ArtistViewSet)
router.register(r'albums', views.AlbumViewSet)
router.register(r'songs', views.SongViewSet)
router.register(r'podcasts', views.PodcastViewSet)
router.register(r'playlists', views.PlaylistViewSet)
router.register(r'mypodcasts', views.MyPodcastViewSet)


# The API URLS are now determined automatically by the router
urlpatterns = [
    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('signup/', views.signup, name='signup'),
    path('', include(router.urls)), #Include the API URLS
]
