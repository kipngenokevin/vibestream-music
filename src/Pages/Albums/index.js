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
      <div className="album-page">
      <h2>Albums</h2>
      <div className="album-list">
        {albums.map((album) => (
          <div key={album.id} className="album-item">
            <img src={album.coverImage} alt={album.title} />
            <p>{album.title}</p>
          </div>
        ))}
      </div>
    </div>
      </ul>
    </div>
  );
};

export default Albums;
