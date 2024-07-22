import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.scss';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import MediaItem from '../../Components/MediaItem';

const Podcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const response = await axios.get('http://153.92.208.133:5000/vibestream/podcasts/'); // Replace with your actual API endpoint
        setPodcasts(response.data);
      } catch (error) {
        console.error('Error fetching podcasts:', error);
      }
    };

    fetchPodcasts();
  }, []);

  const handlePodcastClick = (id) => {
    navigate(`/podcasts/${id}`);
  };

  return (
    <div className="podcasts-page">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="podcasts-content">
          {podcasts.map(podcast => (
            <MediaItem key={podcast.id} item={podcast} type="podcast" onClick={() => handlePodcastClick(podcast.id)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Podcasts;
