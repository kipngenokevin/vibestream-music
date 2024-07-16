/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.scss';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import MediaItem from '../../Components/MediaItem';
import { Link } from 'react-router-dom';

const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await axios.get('https://api.example.com/artists'); // Replace with your API endpoint
        setArtists(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching artists:', error);
        setLoading(false);
      }
    };

    fetchArtists();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="artists-page">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="artists-content">
          {artists.map(artist => (
            <Link key={artist.id} to={`/artists/${artist.id}`} className="artist-link">
              <MediaItem item={artist} type="artist" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artists;

*/

import React, { useState, useEffect } from 'react';
import './style.scss';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import MediaItem from '../../Components/MediaItem';
import { mockArtists } from '../../mockData';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Artists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    setArtists(mockArtists);
  }, []);

  return (
    <div className="artists-page">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="artists-content">
          {artists.map(artist => (
            <Link key={artist.id} to={`/artists/${artist.id}`} className="artist-link">
              <MediaItem item={artist} type="artist" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artists;
