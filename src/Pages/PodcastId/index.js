import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';
import { mockPodcasts } from '../../mockData';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';

const PodcastId = () => {
  const { itemId } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [audio] = useState(new Audio());

  const podcast = mockPodcasts.find(p => p.id === parseInt(itemId, 10));

  useEffect(() => {
    if (podcast) {
      audio.src = podcast.audioUrl;
    }
  }, [podcast, audio]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (event) => {
    const newProgress = event.target.value;
    audio.currentTime = (audio.duration / 100) * newProgress;
    setProgress(newProgress);
  };

  useEffect(() => {
    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    audio.addEventListener('timeupdate', updateProgress);
    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
    };
  }, [audio]);

  if (!podcast) {
    return <div>Podcast not found</div>;
  }

  return (
    <div className="podcast-id-page">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="podcast-details">
          <div className="podcast-hero" style={{ backgroundImage: `url(${podcast.coverImage})`, height: '65vh', width: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
          <div className="podcast-info">
            <h2>{podcast.title}</h2>
            <p>{podcast.description}</p>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={progress} 
              onChange={handleProgressChange} 
            />
            <button onClick={togglePlayPause}>
              {isPlaying ? 'Pause' : 'Play'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastId;
