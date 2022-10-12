import React from 'react';
import logo from '../images/logo.png';

function Logo() {
  return (
    <div className="main-header">
      <a href="/">
        <img src={logo} alt="logo" id="main-logo" />
      </a>
    </div>
  );
}

export default Logo;
