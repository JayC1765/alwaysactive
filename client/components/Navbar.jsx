import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../containers/Logo'

function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <ul>
        <li><Link to="/signuplogin" state={true}>Sign Up</Link></li>
        <li><Link to="/signuplogin" state={false}>Log In</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
