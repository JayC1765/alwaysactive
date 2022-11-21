import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="main-header">
        <a href="/">
          <img src={logo} alt="logo" id="main-logo" />
        </a>
      </div>
      {props.isLogged === false ? (
        <ul>
          <li>
            <Link to="/signuplogin">Sign Up</Link>
          </li>
          <li>
            <Link to="/signuplogin">Log In</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/signuplogin">Log Out</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
