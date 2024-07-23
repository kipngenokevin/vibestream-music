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
        const response = await axios.get('/vibestream/albums/');
        const albumsData = response.data;

        const fetchArtistNames = async (albums) => {
          const artistPromises = albums.map(async (album) => {
            if (typeof album.artist === 'number') {
              const artistResponse = await axios.get(`/vibestream/artists/${album.artist}`);
              return { ...album, artist: artistResponse.data.name };
            }
            return album;
          });

          const albumsWithArtistNames = await Promise.all(artistPromises);
          setAlbums(albumsWithArtistNames);
        };

        fetchArtistNames(albumsData);
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
