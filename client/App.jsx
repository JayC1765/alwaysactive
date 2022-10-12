import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import SignUpLogInPage from './components/SignUpLogInPage';
import MainPage from './containers/MainPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signuplogin" element={<SignUpLogInPage />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
