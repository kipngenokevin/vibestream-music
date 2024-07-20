import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './style.scss';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';

const SongDetail = () => {
  const { id } = useParams();
  const [song, setSong] = useState(null);
  const [artist, setArtist] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const response = await axios.get(`/vibestream/songs/${id}`);
        setSong(response.data);
        if (typeof response.data.artist === 'number') {
          const artistResponse = await axios.get(`/vibestream/artists/${response.data.artist}`);
          setArtist(artistResponse.data);
        } else {
          setArtist(response.data.artist);
        }
      } catch (error) {
        console.error('Error fetching song:', error);
      }
    };

    fetchSong();
  }, [id]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  if (!song || !artist) {
    return <div>Loading...</div>;
  }

  return (
    <div className="song-detail-page">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="song-details">
          <div className="song-hero" style={{ backgroundImage: `url(${song.image})`, height: '55vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
          <div className="song-info">
          <audio
              ref={audioRef}
              src={song.media}
              onTimeUpdate={handleTimeUpdate}
              controls
            />
            <h2>{song.title}</h2>
            <p>Artist: {artist.name || artist}</p>
            <p>Duration: {song.duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongDetail;
