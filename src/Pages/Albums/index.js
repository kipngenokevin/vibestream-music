import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.scss';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/albums')
      .then(response => {
        setAlbums(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the albums!', error);
      });
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />
      <ul>
        {albums.map(album => (
          <li key={album.id}>{album.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;
