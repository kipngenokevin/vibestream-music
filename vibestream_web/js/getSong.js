const fetchSongs = (endpointURL, callback) => {
    $.ajax({
        url: endpointURL,
        method: 'GET',
        success: function(data) {
            callback(data);
        },
        error: function(xhr, status, error) {
            console.error("There has been a problem fetching your songs: ", status, error);
        }
    });
}

export default fetchSongs;
