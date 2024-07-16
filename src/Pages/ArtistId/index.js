import React, { useState, useEffect } from 'react';
import './style.scss';
import Header from '../../Components/Header';
import Sidebar from '../../Components/Sidebar';
import { useParams } from 'react-router-dom';
import { mockArtists } from '../../mockData';

const ArtistId = () => {
  const { itemId } = useParams(); // Extract the artist id from URL params
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const foundArtist = mockArtists.find(a => a.id === parseInt(itemId, 10)); // Find artist by id
    setArtist(foundArtist);
  }, [itemId]);

  if (!artist) {
    return <div>Artist not found</div>; // Render if artist with given id is not found
  }

  return (
    <div className="artist-page">
      <Header />
      <Sidebar />
      <div className="artist-details">
        <img src={artist.coverImage} alt={artist.title} className="artist-cover" />
        <div className="artist-info">
          <h2>{artist.title}</h2>
          <p>{artist.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtistId;
