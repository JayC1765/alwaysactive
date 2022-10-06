import React from 'react';

function LogIn(props) {
  return (
    <div>
      <form onSubmit={props.logIn}>
        <input
          id="inputBox"
          type="text"
          placeholder="Username"
          required
          onChange={(e) => {props.setLogInUsername(e.target.value)}}
        />
        <input
          id="inputBox"
          type="password"
          placeholder="Password"
          required
          onChange={(e) => {props.setLogInPassword(e.target.value)}}
        />
        <input type="submit" value="Log In" id="logInBtn" />
      </form>
    </div>

  );
}

export default LogIn;
