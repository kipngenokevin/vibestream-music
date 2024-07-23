import { artistsEndpointURL } from "../index.js";
import fetchArtists from "./fetchArtist.js";

$(document).ready(function() {
    fetchArtists(artistsEndpointURL, populateArtists);

    // Add event listener for the modal
    $('#artistModal').on('show.bs.modal', function(e) {
        const artistId = $(e.relatedTarget).data('id');
        fetchArtistDetails(artistId);
    });
});


function populateArtists(artists) {
    const container = $('#artists-container');
    container.empty();

    artists.forEach(artist => {
        const artistCard = `
            <div class="col-sm-4 artist-card music-card">
                <a href="#" class="stretched-link" data-bs-toggle="modal" data-bs-target="#artistModal" data-id="${artist.id}">
                    <img src="${artist.image}" class="card-img-top artist-card-img" alt="${artist.name}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${artist.name}</h5>
                    </div>
                </a>
            </div>
        `;
        container.append(artistCard);
    });
}

function fetchArtistDetails(artistId) {
    $.ajax({
        url: `https://music.gigastreammedia.net/api/vibestream/artists/${artistId}/albums/`,
        method: 'GET',
        success: function(albums) {
            populateArtistAlbums(albums);
        },
        error: function(xhr, status, error) {
            console.error("Error fetching albums: ", error);
        }
    });
    $.ajax({
        url: `https://music.gigastreammedia.net/api/vibestream/artists/${artistId}/songs/`,
        method: 'GET',
        success: function(songs) {
            populateArtistSongs(songs);
        },
        error: function(xhr, status, error) {
            console.error("Error fetching songs: ", error);
        }
    });
} 

function populateArtistAlbums(albums) {
    const container = $('#artist-albums');
    container.empty(); // clear existing content

    albums.forEach(album => {
        const albumItem = `
            <div class="list-group-item">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">${album.title}</h5>
                    <small>${album.release_date}</small>
                </div>
                <img src="${album.image}" class="img-fluid" alt="${album.title}">
            </div>
        `;
        container.append(albumItem);
    });
}



function populateArtistSongs(songs) {
    const container = $('#artist-songs');
    container.empty(); // Clear existing content

    songs.forEach(song => {
        //const durationFormatted = parseDuration(song.duration);
        const songItem = `
            <div class="list-group">
                <div class="row g-0">
                    <div class="col-12">
                        <a href="play.html?songid=${song.id}" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">${song.title}</h5>
                                <small>${song.duration}</small>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        `;
        container.append(songItem);
    });
}
