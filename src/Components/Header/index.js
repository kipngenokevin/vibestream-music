import React from 'react';
import { toAbsoluteUrl } from '../../_helpers/utils'
import { Link } from 'react-router-dom';
import './style.scss';
import Search from '../SearchForm';

export const Header = () => {
  const Logo = toAbsoluteUrl('/Assets/Vibe.png');
  const Profile = toAbsoluteUrl('./Assets/profile-user.png');
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="Logo" /> 
      </div>
      <div>
        < Search />
      </div>
      <div className='profile'>
       <Link to="/profile">
          <img src= {Profile} alt='Profile' />
       </Link>
      </div>
    </nav>
  )
}
