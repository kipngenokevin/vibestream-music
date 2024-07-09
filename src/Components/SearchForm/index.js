import React, { useState } from 'react';
import './style.scss';

const Search = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      window.location.href = `https://www.google.com/search?q=${query}`;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search" 
      />
    </form>
  );
};

export default Search;
