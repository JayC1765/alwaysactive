import React from 'react';

function SignUp(props) {
  return (
    <div>
      <form>
        <input
          id="inputBox"
          onChange={(e) => { props.setSignUpUsername(e.target.value); }}
          value={props.signUpUsername}
          placeholder="Username"
          type="text"
          required
        />
        <input
          id="inputBox"
          onChange={(e) => { props.setSignUpPassword(e.target.value); }}
          value={props.signUpPassword}
          placeholder="Password"
          type="text"
          required
        />
        <div>
          <button id='signUpBtn' type="submit" onClick={(e) => {props.saveUser(e)}}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
