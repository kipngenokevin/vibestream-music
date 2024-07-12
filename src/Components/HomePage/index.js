// HomePage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.scss';

const HomePage = () => {
  const [songs, setSongs] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/popular-songs')
      .then(response => setSongs(response.data))
      .catch(error => console.error('Error fetching songs:', error));

    axios.get('https://api.example.com/popular-albums')
      .then(response => setAlbums(response.data))
      .catch(error => console.error('Error fetching albums:', error));

    axios.get('https://api.example.com/popular-podcasts')
      .then(response => setPodcasts(response.data))
      .catch(error => console.error('Error fetching podcasts:', error));

    axios.get('https://api.example.com/popular-artists')
      .then(response => setArtists(response.data))
      .catch(error => console.error('Error fetching podcasts:', error));  
  }, []);

  return (
    <div className="sections">
      <div className="section">
        <h2 className="section-title">Popular Songs</h2>
        <div className="section-content">
          {songs.map(song => (
            <div className="section-item" key={song.id} onClick={() => alert(`Clicked on ${song.title}`)}>
              <img src={song.coverImage} alt={song.title} />
              <p>{song.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Popular Albums</h2>
        <div className="section-content">
          {albums.map(album => (
            <div className="section-item" key={album.id} onClick={() => alert(`Clicked on ${album.title}`)}>
              <img src={album.coverImage} alt={album.title} />
              <p>{album.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Popular Podcasts</h2>
        <div className="section-content">
          {podcasts.map(podcast => (
            <div className="section-item" key={podcast.id} onClick={() => alert(`Clicked on ${podcast.title}`)}>
              <img src={podcast.coverImage} alt={podcast.title} />
              <p>{podcast.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Best of artists</h2>
        <div className="section-content">
          {artists.map(artist => (
            <div className="section-item" key={artist.id} onClick={() => alert(`Clicked on ${artist.title}`)}>
              <img src={artist.coverImage} alt={artist.title} />
              <p>{artist.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
