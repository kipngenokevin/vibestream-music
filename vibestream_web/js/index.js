// GLOBAL ENDPOINT URLS
const songsEndpointURL = "https://music.gigastreammedia.net/api/vibestream/songs/";
export const albumsEndpointURL = "https://music.gigastreammedia.net/api/vibestream/albums/";
export const playlistsEndpointURL = "https://music.gigastreammedia.net/api/vibestream/playlists/";
const artistsEndpointURL = "https://music.gigastreammedia.net/api/vibestream/artists/";
const podcastsEndpointURL = "https://music.gigastreammedia.net/api/vibestream/podcasts/";

// IMPORT JS
import fetchSongs from "./getSong.js";


$(document).ready(function() {
    fetchSongs(songsEndpointURL, populateSongs);
});

function populateSongs(songs) {
    const container = $('#songs-container');
    container.empty();

    songs.forEach(song => {
        const card = `
            <div class="card music-card col-md-4">
                <img src="${song.image}" class="card-img-top song-img" alt="${song.title}">
                <div class="card-body text-center">
                    <h6 class="card-title">${song.title}</h6>
                    <small class="card-text">${song.duration}</small>
                    <div class="d-flex">
                        <a href="play.html?songid=${song.id}" class="btn btn-outline-danger material-symbols-outlined flex-grow-1">
                            play_circle
                        </a>
                    </div>
                </div>
            </div>
        `;
        container.append(card);
    });
}
