import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.scss';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import MediaItem from '../../Components/MediaItem';

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get('http://153.92.208.133:5000/vibestream/albums/'); // Replace with the correct endpoint
        setAlbums(response.data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <div className="albums-page">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="albums-content">
          {albums.map(album => (
            <Link to={`/albums/${album.id}`} key={album.id}>
              <MediaItem item={album} type="album" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Albums;
