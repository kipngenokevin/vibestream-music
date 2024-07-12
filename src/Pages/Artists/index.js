import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.scss';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';

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
       <Header />
       <Sidebar />
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Artists;
