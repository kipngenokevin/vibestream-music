/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.scss';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import MediaItem from '../../Components/MediaItem';

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get('https://api.example.com/albums'); // Replace with your API endpoint
        setAlbums(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching albums:', error);
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="albums-page">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="albums-content">
          {albums.map(album => (
            <MediaItem key={album.id} item={album} type="album" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Albums;

*/

import React, { useState, useEffect } from 'react';
import './style.scss';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import MediaItem from '../../Components/MediaItem';
import { mockAlbums } from '../../mockData';

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    setAlbums(mockAlbums);
  }, []);

  return (
    <div className="albums-page">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="albums-content">
          {albums.map(album => (
            <MediaItem key={album.id} item={album} type="album" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Albums;
