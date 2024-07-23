const fetchArtists = (endpointURL, callback) => {
    $.ajax({
        url: endpointURL,
        method: 'GET',
        success: function(data) {
            callback(data);
        },
        error: function(xhr, status, error) {
            console.error("Error fetching artists: ", error);
        }
    });
}

export default fetchArtists;
