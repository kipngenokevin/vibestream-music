import fetchAlbums from "./fetchAlbums.js";
import { albumsEndpointURL } from "../index.js";

$(document).ready(function() {
    fetchAlbums(albumsEndpointURL, populateAlbums);

    // Add event listener for the modal
    $('#albumModal').on('show.bs.modal', function(e) {
        const albumId = $(e.relatedTarget).data('id');
        fetchSongsByAlbum(albumId);
    });
});

function populateAlbums(albums) {
    const container = $('#albums-container');
    container.empty(); // Clear existing content

    albums.forEach(album => {
        const albumCard = `
            <div class="col-sm-4 card music-card ">
                <img src="${album.image}" class="card-img-top album-song-img" alt="${album.name}">
                <div class="card-body text-center">
                    <h5 class="card-title">${album.title}</h5>
                    <button class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#albumModal" data-id="${album.id}">View Songs</button>
                </div>
            </div>
        `;
        container.append(albumCard);
    });
}

function fetchSongsByAlbum(albumId) {
    $.ajax({
        url: `https://music.gigastreammedia.net/api/vibestream/albums/${albumId}/songs/`,
        method: 'GET',
        success: function(songs) {
            // Uncomment the next line to log raw data for debugging
            // console.log('Fetched songs:', songs);
            populateSongs(songs);
        },
        error: function(xhr, status, error) {
            console.error("Error fetching songs: ", error);
        }
    });
}

function parseDuration(duration) {
    // console.log(`Parsing duration: ${duration}`);

    // Updated regular expression to handle 'P0DT00H07M02S' format
    const match = duration.match(/P(?:[0-9]+D)?T(?:([0-9]+)H)?(?:([0-9]+)M)?(?:([0-9]+)S)?/);

    if (match) {
        // Extract hours, minutes, and seconds from the match
        const hours = parseInt(match[1] || '0', 10);
        const minutes = parseInt(match[2] || '0', 10);
        const seconds = parseInt(match[3] || '0', 10);

        // console.log(`Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`);

        // Convert total duration to minutes and seconds
        const totalMinutes = (hours * 60) + minutes;
        return `${String(totalMinutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    console.error(`Invalid duration format: ${duration}`);
    return '00:00'; // Default in case of an error
}

// Uncomment the next block to test duration parsing
/*
const testDurations = [
    'PT1H2M30S',  // Should return 62:30
    'PT0H5M45S',  // Should return 05:45
    'PT0H0M0S',   // Should return 00:00
    'PT3M15S',    // Should return 03:15
    'PT2H30S'     // Should return 150:30
];

testDurations.forEach(duration => {
    console.log(parseDuration(duration));
});
*/

// Example usage in populateSongs function
function populateSongs(songs) {
    const container = $('#songs-container');
    container.empty(); // Clear existing content

    songs.forEach(song => {
        const durationFormatted = parseDuration(song.duration);
        // console.log(durationFormatted);
        const songItem = `
            <div class="list-group">
                <div class="row g-0">
                    <div class="col-12">
                        <a href="play.html?songid=${song.id}" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">${song.title}</h5>
                                <small>${durationFormatted}</small>
                            </div>
                            <p class="mb-1">${song.artist_name}</p>
                        </a>
                    </div>
                </div>
            </div>
        `;
        container.append(songItem);
    });
}
