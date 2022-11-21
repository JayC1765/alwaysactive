import React, { useState } from 'react';

function MainPage() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <div className="main-page">
      <div className="showcase"></div>
    </div>
  );
}

export default MainPage;
