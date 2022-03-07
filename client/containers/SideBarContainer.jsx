import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import CreateEventButton from '../components/CreateEventButton';
import EventForm from '../components/EventForm';
import SignUpLogInButton from '../components/SignUpLogInButton';
import SignUpLogInPage from '../components/SignUpLogInPage';

function SideBarContainer(props) {
  // const [formOpened, setForm] = useState(false);
  return (
    <div id="SideBarContainer">
      <input id="citySearch" type="text" placeholder="city" />
      <input id="stateSearch" type="text" placeholder="state" />
      <button onClick={() => {props.getFilteredEvents(document.getElementById('citySearch').value, document.getElementById('stateSearch').value);}}>search</button>
      {props.formOpened === false && <CreateEventButton setForm={props.setForm} />}
      {/* {props.formOpened && <EventForm username={props.username} setForm={props.setForm} eventSaved={props.eventSaved} setEventSaved={props.setEventSaved} />} */}
      {props.formOpened && <EventForm username={props.username} setForm={props.setForm} getEvents={props.getEvents} />}

    </div>
  );
}

// function SideBarContainer(props) {
//   const [formOpened, setForm] = useState(false);
//   return (
//     <div id="SideBarContainer">
//       {formOpened === false && <CreateEventButton setForm={setForm} />}
//       {formOpened && <EventForm setForm={setForm} />}
//     </div>
//   );
// }

export default SideBarContainer;
