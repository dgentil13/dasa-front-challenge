import React from 'react';
import './navbar.scss';

const Navbar = ({ repo }) => {
  return (
    <nav>
      <div className='logo'>
        <h4> GitHub Search </h4>
      </div>
      <a href='https://github.com/'> Official GitHub </a>
      {/* <ul>
        <li>teste</li>
        <li>teste 2</li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
