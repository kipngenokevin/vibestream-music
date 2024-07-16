/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.scss';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import MediaItem from '../../Components/MediaItem';

const Songs = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('https://api.example.com/songs'); // Replace with your actual API endpoint
        setSongs(response.data);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchSongs();
  }, []);

  return (
    <div className="songs-page">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="songs-content">
          {songs.map(song => (
            <MediaItem key={song.id} item={song} type="song" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Songs;

*/

import React, { useState, useEffect } from 'react';
import './style.scss';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import MediaItem from '../../Components/MediaItem';
import { mockSongs } from '../../mockData';

const Songs = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    setSongs(mockSongs);
  }, []);

  return (
    <div className="songs-page">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="songs-content">
          {songs.map(song => (
            <MediaItem key={song.id} item={song} type="song" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Songs;
