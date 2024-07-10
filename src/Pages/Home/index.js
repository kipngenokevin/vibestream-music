import React from 'react';
import Header from '../../Components/Header'; // Remove curly braces if Header is default export
import Sidebar from '../../Components/Sidebar';
import HomePage from '../../Components/HomePage';
import './style.scss';

const Home = () => {
  return (
      <div className="App">
        <Sidebar />
        <Header /> 
        <div className="content">
        <HomePage />
        </div>
      </div>
  );
};

export default Home; 
