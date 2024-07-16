import React from 'react';
import './style.scss';

const MediaItem = ({ item, type, onClick }) => {
  return (
    <div className="media-item" onClick={onClick}>
      <img className="media-cover" src={item.coverImage} alt={item.title || item.name} />
      <div className="media-info">
        <h2 className="media-title">{item.title || item.name}</h2>
        <p className="media-description">{item.description}</p>
      </div>
    </div>
  );
};

export default MediaItem;


