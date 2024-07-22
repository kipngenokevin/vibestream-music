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
  const [songsByArtist, setSongsByArtist] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const response = await axios.get(`/vibestream/songs/${id}`);
        setSong(response.data);

        // Fetch artist details
        if (typeof response.data.artist === 'number') {
          const artistResponse = await axios.get(`/vibestream/artists/${response.data.artist}`);
          setArtist(artistResponse.data);

          // Fetch songs by this artist
          const songsResponse = await axios.get(`/vibestream/artists/${response.data.artist}/songs`);
          setSongsByArtist(songsResponse.data);
        } else {
          setArtist(response.data.artist);
          // Fetch songs by this artist if artist is embedded
          const songsResponse = await axios.get(`/vibestream/artists/${response.data.artist.id}/songs`);
          setSongsByArtist(songsResponse.data);
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
