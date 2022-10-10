import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function MainPage() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <h1>Hello World</h1>
      <button type="submit" onClick={() => { navigate('/SignUpLogIn'); }}>Click Me</button>
    </div>
  );
}

export default MainPage;
