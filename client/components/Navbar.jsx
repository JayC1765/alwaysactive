import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/signuplogin" state={true}>Sign Up</Link></li>
        <li><Link to="/signuplogin" state={false}>Log In</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
