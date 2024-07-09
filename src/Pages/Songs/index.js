// Songs.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.scss';

const Songs = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/songs')
      .then(response => {
        setSongs(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the songs!', error);
      });
  }, []);

  return (
    <div className="songs">
      <h2>Songs</h2>
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Songs;
