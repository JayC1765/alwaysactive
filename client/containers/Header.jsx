import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header(props) {
  const navigate = useNavigate();

  return (
    <div className="mainheader">
      {/* why does this image below not work? */}
      {/* <img src="../images/logo.png" alt=""></img> */}
      {/* this image only works with both an opening * closing img tag*/}
      <img src="https://traversymedia.com/images/grid.svg" alt="" id="main-logo"></img>
      <nav>
        <ul className="navbar">
          {/* Why can I not access the signuplogin page if localhost:8080/SignUplogIn is directly entered into the browser */}
          <li><a href={navigate('/SignUpLogIn')}>New User1</a></li>
          <li><a href="/#/SignUpLogIn">New User2</a></li>
          <li><a href="">Log In</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
