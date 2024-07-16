import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';

const SingleItem = ({ type, mockData }) => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    console.log('useParams itemId:', itemId); // Debugging line
    const foundItem = mockData.find((item) => item.id === parseInt(itemId, 10));
    console.log('foundItem:', foundItem); // Debugging line
    setItem(foundItem);
  }, [itemId, mockData]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-item">
      <div className="hero-section" style={{ backgroundImage: `url(${item.coverImage})` }}>
        <div className="overlay">
          <h1 className="item-title">{item.title || item.name}</h1>
          <p className="item-description">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;

/*
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './style.scss';

const SingleItem = ({ type }) => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`https://api.example.com/${type}/${itemId}`);
        setItem(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching item:', error);
        setLoading(false);
      }
    };

    fetchItem();
  }, [itemId, type]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="single-item">
      <div className="hero-section" style={{ backgroundImage: `url(${item.coverImage})` }}>
        <div className="overlay">
          <h1 className="item-title">{item.title || item.name}</h1>
          <p className="item-description">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
*/
