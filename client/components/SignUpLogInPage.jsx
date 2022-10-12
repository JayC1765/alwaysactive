import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SignUp from './SignUp';
import LogIn from './LogIn';

function SignUpLogInPage(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [logInUsername, setLogInUsername] = useState('');
  const [logInPassword, setLogInPassword] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isSignUpFormVisible, setIsSignUpFormVisible] = useState(location.state);

  const saveUser = (e) => {
    e.preventDefault();
    const username = signUpUsername;
    const password = signUpPassword;
    const method = 'POST';
    if (username && password) {
      fetch('/signup', {
        method,
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((data) => data.json())
        .then((data) => {
          if (data === true) {
            setSignUpUsername('');
            setSignUpPassword('');
            setIsSignedIn(true);
            navigate('/homepage', { state: username });
          } else {
            // eslint-disable-next-line no-alert
            alert('Username is taken');
            setSignUpUsername('');
            setSignUpPassword('');
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const logIn = (e) => {
    e.preventDefault();
    const username = logInUsername;
    const password = logInPassword;
    const method = 'POST';
    fetch('/login', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data === true) {
          setLogInUsername('');
          setLogInPassword('');
          setIsSignedIn(true);
          navigate('/homepage', { state: username });
        } else {
          // eslint-disable-next-line no-alert
          alert('Incorrect login');
          setLogInUsername('');
          setLogInPassword('');
        }
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (username) => {
    fetch('/deleteUser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === true) console.log('user deleted successful');
        else console.log('no username was deleted');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div id="modalContainer">
        <div id="modal">
          <div className="form-tabs">
            <h2
              onClick={() => setIsSignUpFormVisible(true)}
              className={isSignUpFormVisible ? "selected-tab" : ""}
            >
              Sign Up
            </h2>
            <h2
              onClick={() => setIsSignUpFormVisible(false)}
              className={isSignUpFormVisible ? "" : "selected-tab"}
            >
              Log In
            </h2>
          </div>
          {isSignUpFormVisible ? (
            <SignUp
              signUpUsername={signUpUsername}
              signUpPassword={signUpPassword}
              setSignUpUsername={setSignUpUsername}
              setSignUpPassword={setSignUpPassword}
              saveUser={saveUser}
            />
          ) : (
            <LogIn
              logInUsername={logInUsername}
              logInPassword={logInPassword}
              setLogInUsername={setLogInUsername}
              setLogInPassword={setLogInPassword}
              logIn={logIn}
            />
          )}
          <button
            type="button"
            id="deleteBtn"
            onClick={() => deleteUser(signUpUsername)}
          >
            Delete user
          </button>
        </div>
      </div>

    </div>
  );
}

export default SignUpLogInPage;
