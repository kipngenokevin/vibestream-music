import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './style.scss';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';

const PodcastDetail = () => {
  const { id } = useParams();
  const [podcast, setPodcast] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const fetchPodcast = async () => {
      try {
        const response = await axios.get(`/vibestream/podcasts/${id}`);
        setPodcast(response.data);
      } catch (error) {
        console.error('Error fetching podcast:', error);
      }
    };

    fetchPodcast();
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

  if (!podcast) {
    return <div>Loading...</div>;
  }

  return (
    <div className="podcast-detail-page">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="podcast-details">
          <div className="podcast-hero" style={{ backgroundImage: `url(${podcast.image})`, height: '55vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
          <div className="podcast-info">
            <audio
              ref={audioRef}
              src={podcast.audioUrl}
              onTimeUpdate={handleTimeUpdate}
              controls
            />
            <h2>{podcast.title}</h2>
            <p>Host: {podcast.host}</p>
            <p>Description: {podcast.description}</p>
            <p>Date: {podcast.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastDetail;
