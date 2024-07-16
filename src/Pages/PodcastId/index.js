import React from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';
import { mockPodcasts } from '../../mockData';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';

const PodcastId = () => {
  const { itemId } = useParams();
  const podcast = mockPodcasts.find(p => p.id === parseInt(itemId, 10));

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastId;
