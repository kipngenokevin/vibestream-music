// Artists.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.scss';

const Artists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/artists')
      .then(response => {
        setArtists(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the artists!', error);
      });
  }, []);

  return (
    <div className="artists">
      <h2>Artists</h2>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Artists;
