import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faCompactDisc, faUser, faPodcast } from '@fortawesome/free-solid-svg-icons';
import './style.scss';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/albums">
            <FontAwesomeIcon icon={faCompactDisc} /> Albums
          </Link>
        </li>
        <li>
          <Link to="/songs">
            <FontAwesomeIcon icon={faMusic} /> Songs
          </Link>
        </li>
        <li>
          <Link to="/artists">
            <FontAwesomeIcon icon={faUser} /> Artists
          </Link>
        </li>
        <li>
          <Link to="/podcasts">
            <FontAwesomeIcon icon={faPodcast} /> Podcasts
          </Link>
        </li>
      </ul>
      <p>Favorites</p>
      <ul>
        <li>
          <Link to='/playlists'>
            <FontAwesomeIcon icon={faHeart} /> Playlists
          </Link>
        </li>
        <li>
          <Link to='/mypodcasts'>
            <FontAwesomeIcon icon={faPodcast} /> My Podcasts
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
