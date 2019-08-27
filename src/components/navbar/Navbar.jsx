import React from 'react';
import './navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <h4> GitHub Search </h4>
      </div>
      <a href='https://github.com/'> Official GitHub </a>
    </nav>
  );
};

export default Navbar;
