const fetchSongs = (endpointURL, callback) => {
    $.ajax({
        url: endpointURL,
        method: 'GET',
        success: function(data) {
            callback(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("There has been a problem fetching your songs: ", textStatus, errorThrown);
        console.error("Status Code:", jqXHR.status);
            console.error("Status Text:", textStatus);
            console.error("Error Thrown:", errorThrown);
            console.error("Response Text:", jqXHR.responseText);
	}
    });
}

export default fetchSongs;
