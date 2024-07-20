import React from 'react';
import './style.scss';

const MediaItem = ({ item, type, onClick}) => {
  


  return (
    <div className="media-item" onClick={onClick}>
      <img className="media-cover" src={item.image} alt={item.title || item.name} />
      <div className="media-info">
        <h2 className="media-title">{item.title || item.name}</h2>
        <p className="media-description">{item.artist}</p>
        <p className="media-description">{item.artist}</p>
        
      </div>
    </div>
  );
};

export default MediaItem;



