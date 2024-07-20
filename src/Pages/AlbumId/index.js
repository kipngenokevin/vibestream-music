// src/Pages/AlbumId/index.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './style.scss';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';

const AlbumId = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const response = await axios.get(`/vibestream/albums/${id}`);
        setAlbum(response.data);
        // Fetch songs associated with this album
        const songsResponse = await axios.get(`/vibestream/albums/${id}/songs`);
        setSongs(songsResponse.data);
      } catch (error) {
        console.error('Error fetching album or songs:', error);
      }
    };

    fetchAlbum();
  }, [id]);

  if (!album || !songs) {
    return <div>Loading...</div>;
  }

  return (
    <div className="album-detail-page">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="album-details">
          <div className="album-hero" style={{ backgroundImage: `url(${album.image})` }}>
          </div>
          <div className="album-info">
            <h2>{album.title}</h2>
            <p>Release Date: {new Date(album.release_date).toDateString()}</p>
            <div className="album-songs">
              <h3>Songs in {album.title}</h3>
              <ul>
                {songs.map((song) => (
                  <li key={song.id}>
                    <Link to={`/songs/${song.id}`}>{song.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumId;
