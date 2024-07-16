import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './style.scss'; 
import { mockSongs, mockAlbums, mockPodcasts, mockArtists } from './mockData';

const HomePage = () => {
  const [songIndex, setSongIndex] = useState(0);
  const [albumIndex, setAlbumIndex] = useState(0);
  const [podcastIndex, setPodcastIndex] = useState(0);
  const [artistIndex, setArtistIndex] = useState(0);

  const navigate = useNavigate();

  const handleNext = (setIndex, length) => {
    setIndex(prevIndex => (prevIndex + 5) % length);
  };

  const handlePrev = (setIndex, length) => {
    setIndex(prevIndex => (prevIndex - 5 + length) % length); 
  };

  const handleItemClick = (path, id) => {
    navigate(`/${path}/${id}`);
  };

  return (
    <div className="sections">
      <div className="section">
        <h2 className="section-title">Popular Songs</h2>
        <div className="section-content">
          {mockSongs.slice(songIndex, songIndex + 5).map(song => (
            <div className="section-item" key={song.id} onClick={() => handleItemClick('songs', song.id)}>
              <img src={song.coverImage} alt={song.title} />
              <p>{song.title}</p>
            </div>
          ))}
          {mockSongs.length > 5 && (
            <div className="arrows">
              {songIndex > 0 && (
                <FontAwesomeIcon 
                  icon={faArrowLeft} 
                  className="arrow-icon prev-icon" 
                  onClick={() => handlePrev(setSongIndex, mockSongs.length)} 
                />
              )}
              {songIndex + 5 < mockSongs.length && (
                <FontAwesomeIcon 
                  icon={faArrowRight} 
                  className="arrow-icon next-icon" 
                  onClick={() => handleNext(setSongIndex, mockSongs.length)} 
                />
              )}
            </div>
          )}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Popular Albums</h2>
        <div className="section-content">
          {mockAlbums.slice(albumIndex, albumIndex + 5).map(album => (
            <div className="section-item" key={album.id} onClick={() => handleItemClick('albums', album.id)}>
              <img src={album.coverImage} alt={album.title} />
              <p>{album.title}</p>
            </div>
          ))}
          {mockAlbums.length > 5 && (
            <div className="arrows">
              {albumIndex > 0 && (
                <FontAwesomeIcon 
                  icon={faArrowLeft} 
                  className="arrow-icon prev-icon" 
                  onClick={() => handlePrev(setAlbumIndex, mockAlbums.length)} 
                />
              )}
              {albumIndex + 5 < mockAlbums.length && (
                <FontAwesomeIcon 
                  icon={faArrowRight} 
                  className="arrow-icon next-icon" 
                  onClick={() => handleNext(setAlbumIndex, mockAlbums.length)} 
                />
              )}
            </div>
          )}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Popular Podcasts</h2>
        <div className="section-content">
          {mockPodcasts.slice(podcastIndex, podcastIndex + 5).map(podcast => (
            <div className="section-item" key={podcast.id} onClick={() => handleItemClick('podcasts', podcast.id)}>
              <img src={podcast.coverImage} alt={podcast.title} />
              <p>{podcast.title}</p>
            </div>
          ))}
          {mockPodcasts.length > 5 && (
            <div className="arrows">
              {podcastIndex > 0 && (
                <FontAwesomeIcon 
                  icon={faArrowLeft} 
                  className="arrow-icon prev-icon" 
                  onClick={() => handlePrev(setPodcastIndex, mockPodcasts.length)} 
                />
              )}
              {podcastIndex + 5 < mockPodcasts.length && (
                <FontAwesomeIcon 
                  icon={faArrowRight} 
                  className="arrow-icon next-icon" 
                  onClick={() => handleNext(setPodcastIndex, mockPodcasts.length)} 
                />
              )}
            </div>
          )}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Best of Artists</h2>
        <div className="section-content">
          {mockArtists.slice(artistIndex, artistIndex + 5).map(artist => (
            <div className="section-item" key={artist.id} onClick={() => handleItemClick('artists', artist.id)}>
              <img src={artist.coverImage} alt={artist.title} />
              <p>{artist.title}</p>
            </div>
          ))}
          {mockArtists.length > 5 && (
            <div className="arrows">
              {artistIndex > 0 && (
                <FontAwesomeIcon 
                  icon={faArrowLeft} 
                  className="arrow-icon prev-icon" 
                  onClick={() => handlePrev(setArtistIndex, mockArtists.length)} 
                />
              )}
              {artistIndex + 5 < mockArtists.length && (
                <FontAwesomeIcon 
                  icon={faArrowRight} 
                  className="arrow-icon next-icon" 
                  onClick={() => handleNext(setArtistIndex, mockArtists.length)} 
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;


/*
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.scss';

const HomePage = () => {
  const [songs, setSongs] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [artists, setArtists] = useState([]);

  const [songIndex, setSongIndex] = useState(0);
  const [albumIndex, setAlbumIndex] = useState(0);
  const [podcastIndex, setPodcastIndex] = useState(0);
  const [artistIndex, setArtistIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data for songs
    axios.get('https://api.example.com/songs')
      .then(response => setSongs(response.data))
      .catch(error => console.error('Error fetching songs:', error));

    // Fetch data for albums
    axios.get('https://api.example.com/albums')
      .then(response => setAlbums(response.data))
      .catch(error => console.error('Error fetching albums:', error));

    // Fetch data for podcasts
    axios.get('https://api.example.com/podcasts')
      .then(response => setPodcasts(response.data))
      .catch(error => console.error('Error fetching podcasts:', error));

    // Fetch data for artists
    axios.get('https://api.example.com/artists')
      .then(response => setArtists(response.data))
      .catch(error => console.error('Error fetching artists:', error));
  }, []);

  const handleNext = (setIndex, length) => {
    setIndex(prevIndex => (prevIndex + 5) % length);
  };

  const handlePrev = (setIndex, length) => {
    setIndex(prevIndex => (prevIndex - 5 + length) % length);
  };

  const handleItemClick = (path, id) => {
    navigate(`/${path}/${id}`);
  };

  return (
    <div className="sections">
      <div className="section">
        <h2 className="section-title">Popular Songs</h2>
        <div className="section-content">
          {songs.slice(songIndex, songIndex + 5).map(song => (
            <div className="section-item" key={song.id} onClick={() => handleItemClick('songs', song.id)}>
              <img src={song.coverImage} alt={song.title} />
              <p>{song.title}</p>
            </div>
          ))}
          {songs.length > 5 && (
            <div className="arrows">
              {songIndex > 0 && (
                <FontAwesomeIcon 
                  icon={faArrowLeft} 
                  className="arrow-icon prev-icon" 
                  onClick={() => handlePrev(setSongIndex, songs.length)} 
                />
              )}
              {songIndex + 5 < songs.length && (
                <FontAwesomeIcon 
                  icon={faArrowRight} 
                  className="arrow-icon next-icon" 
                  onClick={() => handleNext(setSongIndex, songs.length)} 
                />
              )}
            </div>
          )}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Popular Albums</h2>
        <div className="section-content">
          {albums.slice(albumIndex, albumIndex + 5).map(album => (
            <div className="section-item" key={album.id} onClick={() => handleItemClick('albums', album.id)}>
              <img src={album.coverImage} alt={album.title} />
              <p>{album.title}</p>
            </div>
          ))}
          {albums.length > 5 && (
            <div className="arrows">
              {albumIndex > 0 && (
                <FontAwesomeIcon 
                  icon={faArrowLeft} 
                  className="arrow-icon prev-icon" 
                  onClick={() => handlePrev(setAlbumIndex, albums.length)} 
                />
              )}
              {albumIndex + 5 < albums.length && (
                <FontAwesomeIcon 
                  icon={faArrowRight} 
                  className="arrow-icon next-icon" 
                  onClick={() => handleNext(setAlbumIndex, albums.length)} 
                />
              )}
            </div>
          )}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Popular Podcasts</h2>
        <div className="section-content">
          {podcasts.slice(podcastIndex, podcastIndex + 5).map(podcast => (
            <div className="section-item" key={podcast.id} onClick={() => handleItemClick('podcasts', podcast.id)}>
              <img src={podcast.coverImage} alt={podcast.title} />
              <p>{podcast.title}</p>
            </div>
          ))}
          {podcasts.length > 5 && (
            <div className="arrows">
              {podcastIndex > 0 && (
                <FontAwesomeIcon 
                  icon={faArrowLeft} 
                  className="arrow-icon prev-icon" 
                  onClick={() => handlePrev(setPodcastIndex, podcasts.length)} 
                />
              )}
              {podcastIndex + 5 < podcasts.length && (
                <FontAwesomeIcon 
                  icon={faArrowRight} 
                  className="arrow-icon next-icon" 
                  onClick={() => handleNext(setPodcastIndex, podcasts.length)} 
                />
              )}
            </div>
          )}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Best of Artists</h2>
        <div className="section-content">
          {artists.slice(artistIndex, artistIndex + 5).map(artist => (
            <div className="section-item" key={artist.id} onClick={() => handleItemClick('artists', artist.id)}>
              <img src={artist.coverImage} alt={artist.name} />
              <p>{artist.name}</p>
            </div>
          ))}
          {artists.length > 5 && (
            <div className="arrows">
              {artistIndex > 0 && (
                <FontAwesomeIcon 
                  icon={faArrowLeft} 
                  className="arrow-icon prev-icon" 
                  onClick={() => handlePrev(setArtistIndex, artists.length)} 
                />
              )}
              {artistIndex + 5 < artists.length && (
                <FontAwesomeIcon 
                  icon={faArrowRight} 
                  className="arrow-icon next-icon" 
                  onClick={() => handleNext(setArtistIndex, artists.length)} 
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
*/