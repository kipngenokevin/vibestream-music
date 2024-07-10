// Podcasts.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.scss';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';

const Podcasts = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/podcasts')
      .then(response => {
        setPodcasts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the podcasts!', error);
      });
  }, []);

  return (
    <div className="podcasts">
       <Header />
       <Sidebar />
      <ul>
        {podcasts.map(podcast => (
          <li key={podcast.id}>{podcast.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Podcasts;
