import React from 'react';
import { toAbsoluteUrl } from '../../_helpers/utils'
import { Link } from 'react-router-dom';
import './index.scss';
import Search from '../SearchForm';

export const Header = () => {
  const Logo = toAbsoluteUrl('/Assets/Vibe.png')
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="Logo" /> 
      </div>
      <div>
        < Search />
      </div>
      <div>
       <Link to="/home">Profile</Link>
      </div>
    </nav>
  )
}
