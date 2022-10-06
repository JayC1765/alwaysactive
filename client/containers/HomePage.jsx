import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SideBarContainer from './SideBarContainer';
import EventsContainer from './EventsContainer';
import EventBox from '../components/EventBox';

function HomePage(props) {
  const { state } = useLocation();
  const [formOpened, setForm] = useState(false);
  const [eventsArr, setEventsArr] = useState([]);
  const [eventSaved, setEventSaved] = useState(false);

  const getEvents = async () => {
    console.log('what is state ', state) // forgot how we figured out the state is the username
    const response = await fetch('/events', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: state }),
    });
    const data = await response.json();
    setEventsArr(data);
  };

  useEffect(() => {
    getEvents();
  }, []);

  const getFilteredEvents = async (city, stateF) => {
    const response = await fetch('/filter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: state,
        city,
        state: stateF,
      }),
    });
    const data = await response.json();
    setEventsArr(data);
  };

  const toggleRsvp = (index, status) => {
    const newArr = [...eventsArr];
    newArr[index].userstatus = status;
    setEventsArr(newArr);
  };

  const events = [];

  for (let i = 0; i < eventsArr.length; i += 1) {
    const dateObj = new Date(eventsArr[i].time);
    events.push(<EventBox
      key={`EventBox ${i}`}
      index={i}
      name={eventsArr[i].name}
      city={eventsArr[i].city}
      state={eventsArr[i].state}
      description={eventsArr[i].description}
      owner={eventsArr[i].username}
      eventId={eventsArr[i]._id}
      rsvpStatus={eventsArr[i].userstatus}
      user={state}
      date={dateObj.toLocaleDateString()}
      time={dateObj.toLocaleTimeString()}
      getEvents={getEvents}
      toggleRsvp={toggleRsvp}
    />);
  }

  return (
    <div>
      <div id="ContainerParent">
        <SideBarContainer username={state} formOpened={formOpened} setForm={setForm} getEvents={getEvents} getFilteredEvents={getFilteredEvents} />
        {/* <EventsContainer events={events} /> */}
        <div id="EventsContainer">
          {events}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
