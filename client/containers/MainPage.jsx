import React, { useState } from 'react';
import background from '../images/background.png';

function MainPage() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <div className="main-page">
      <div className="showcases">
        <img src={background} alt="" />
      </div>
    </div>
  );
}

export default MainPage;
