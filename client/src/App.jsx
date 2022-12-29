import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import SignUpLogInPage from './components/SignUpLogInPage';
import MainPage from './containers/MainPage';
import Navbar from './components/Navbar';

const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <Router>
      <Navbar isLogged={isLogged} setIsLogged={setIsLogged} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/signuplogin"
          element={<SignUpLogInPage setIsLogged={setIsLogged} />}
        />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
