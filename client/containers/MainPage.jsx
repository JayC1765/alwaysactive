import React, { useState } from 'react';
import Logo from './Logo';
import Navbar from '../components/Navbar';
import background from '../images/background.png';

function MainPage() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <div className="main-page">
      <div className="main-container">
        <Logo />
        <Navbar />
      </div>
      {/* this should be the background */}
      <div className="showcase"></div>
      {/* <img src={background} alt="" /> */}
      {/* <div className="showcase" style={{ background: background }}></div> */}
    </div>
  );
}

export default MainPage;
