let audio = null;
let isPlaying = false;
let songId = null;
let songList = [];
let maxSongId = 0;

$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    songId = urlParams.get('songid');
    if (songId) {
        fetchSongDetails(songId);
        fetchSongList(); // Fetch the list of all songs
    } else {
        console.error('No song ID found in the URL.');
    }
});

function fetchSongDetails(songId) {
    $.ajax({
        url: `https://music.gigastreammedia.net/api/vibestream/songs/${songId}/`,
        method: 'GET',
        success: function (song) {
            populateSongDetails(song);
            fetchArtistName(song.artist);
            // Stop and reset the audio if a new song is being loaded
            if (audio) {
                audio.pause();
                audio.src = ''; // Clear the current source
                isPlaying = false; // Update the state
                $('#play-button').text('play_arrow');
            }
            playSong(song.media); // Play the new song
        },
        error: function (xhr, status, error) {
            console.error('Error fetching song details:', error);
        }
    });
}

function fetchSongList() {
    $.ajax({
	url: 'https://music.gigastreammedia.net/api/vibestream/songs/',
        method: 'GET',
        success: function (songs) {
            songList = songs;
            maxSongId = Math.max(...songList.map(song => song.id));
        },
        error: function (xhr, status, error) {
            console.error('Error fetching song list:', error);
        }
    });
}

function fetchArtistName(artistId) {
    $.ajax({
        url: `https://music.gigastreammedia.net/api/vibestream/artists/${artistId}/`,
        method: 'GET',
        success: function (artist) {
            $('#artist-name').text(artist.name);
        },
        error: function (xhr, status, error) {
            console.error('Error fetching artist details:', error);
        }
    });
}

function populateSongDetails(song) {
    $('#song-image').attr('src', song.image);
    $('#song-title').text(song.title);

    $('#play-button').off('click').on('click', function () {
        if (audio) {
            if (isPlaying) {
                audio.pause();
                $('#play-button').text('play_arrow');
            } else {
                audio.play().catch(error => console.error('Error playing audio:', error));
                $('#play-button').text('pause');
            }
            isPlaying = !isPlaying;
        } else {
            playSong(song.media);
        }
    });

    $('#skip-next').off('click').on('click', function () {
        playNextSong();
    });

    $('#skip-previous').off('click').on('click', function () {
        playPreviousSong();
    });
}

function playSong(mediaUrl) {
    audio = new Audio(mediaUrl);
    audio.addEventListener('timeupdate', updateProgressBar);
    audio.addEventListener('ended', function () {
        $('#play-button').text('play_arrow');
        isPlaying = false;
        playNextSong(); // Automatically play the next song when the current one ends
    });
    audio.play().then(() => {
        $('#play-button').text('pause');
        isPlaying = true;
    }).catch(error => {
        console.error('Error playing audio:', error);
    });
}

function updateProgressBar() {
    const progressBar = $('#progress-bar');
    const duration = audio.duration;
    const currentTime = audio.currentTime;
    const progressPercentage = (currentTime / duration) * 100;
    progressBar.css('width', progressPercentage + '%');
    progressBar.attr('aria-valuenow', progressPercentage);
}

function playNextSong() {
    const currentIndex = songList.findIndex(song => song.id == songId);
    let nextIndex = (currentIndex + 1) % songList.length;
    if (nextIndex < 0) nextIndex = songList.length - 1;
    songId = songList[nextIndex].id;
    fetchSongDetails(songId);
}

function playPreviousSong() {
    const currentIndex = songList.findIndex(song => song.id == songId);
    let prevIndex = (currentIndex - 1 + songList.length) % songList.length;
    if (prevIndex < 0) prevIndex = songList.length - 1;
    songId = songList[prevIndex].id;
    fetchSongDetails(songId);
}


