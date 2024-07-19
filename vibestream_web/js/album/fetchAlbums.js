const fetchAlbums = (endpointURL, callback) => {
    $.ajax({
        url: endpointURL,
        method: 'GET',
        success: function(data) {
            callback(data);
        },
        error: function(xhr, status, error) {
            console.error("Error fetching albums:", error);
        }
    });
}

export default fetchAlbums
