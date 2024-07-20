import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.scss';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import MediaItem from '../../Components/MediaItem';

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('http://153.92.208.133:5000/vibestream/songs/'); // Replace with the correct endpoint
        setSongs(response.data);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchSongs();
  }, []);

  const handleSongClick = (id) => {
    navigate(`/songs/${id}`); // Ensure the path is 'songs'
  };

  return (
    <div className="songs-page">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="songs-content">
          {songs.map(song => (
            <MediaItem key={song.id} item={song} type="song" onClick={() => handleSongClick(song.id)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Songs;
