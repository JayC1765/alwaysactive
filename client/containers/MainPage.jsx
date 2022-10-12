import React, { useState } from 'react';
import Logo from './Logo';
import Navbar from '../components/Navbar';
import background from '../images/background.png';

function MainPage() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <div className="main-page">
      {/* <div className="main-container">
        <Logo />
        <Navbar />
      </div> */}
      <div className="showcases">
        <img src={background} alt="" />
      </div>
    </div>
  );
}

export default MainPage;
