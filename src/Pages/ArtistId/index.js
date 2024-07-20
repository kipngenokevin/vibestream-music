// src/Pages/ArtistId/index.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './style.scss';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';

const ArtistId = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const response = await axios.get(`/vibestream/artists/${id}`);
        setArtist(response.data);
        // Fetch songs associated with this artist
        const songsResponse = await axios.get(`/vibestream/artists/${id}/songs`);
        setSongs(songsResponse.data);
      } catch (error) {
        console.error('Error fetching artist or songs:', error);
      }
    };

    fetchArtist();
  }, [id]);

  if (!artist || !songs) {
    return <div>Loading...</div>;
  }

  return (
    <div className="artist-detail-page">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="artist-details">
          <div className="artist-hero" style={{ backgroundImage: `url(${artist.image})` }}>
          </div>
          <div className="artist-info">
            <h2>{artist.name}</h2>
            <p>{artist.bio}</p>
            <div className="artist-songs">
              <h3>Songs by {artist.name}</h3>
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

export default ArtistId;
