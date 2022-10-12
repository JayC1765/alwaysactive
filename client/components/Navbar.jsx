import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'

function Navbar() {
  const logoutButton = () => {
    // this is just a reminder that logout button needs to be added back into logic
    return (
      <button id="logOutBtn" type="submit">
        Log out
      </button>
    )
  }

  return (
    <nav className="navbar">
      <div className="main-header">
        <a href="/">
          <img src={logo} alt="logo" id="main-logo" />
        </a>
      </div>
      <ul>
        <li><Link to="/signuplogin" state={true}>Sign Up</Link></li>
        <li><Link to="/signuplogin" state={false}>Log In</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
