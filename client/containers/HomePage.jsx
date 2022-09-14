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

  const events = [];

  useEffect(() => {
    getEvents();
  }, [])

  const getEvents = async () => {
    const response = await fetch('/events', {method: 'PUT', body: JSON.stringify({username: state}), headers: { 'Content-Type': 'application/json' } });
    const data = await response.json();
    setEventsArr(data);
  };

  const getFilteredEvents = async (city, stateF) => {
    const response = await fetch('/filter', {
      method: 'POST',
      body: JSON.stringify({ username: state, city: city, state: stateF }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    setEventsArr(data);
  };

  const toggleRsvp = (index, status) => {
    const newArr = [...eventsArr];
    newArr[index].userstatus = status;
    setEventsArr(newArr);
  };

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
        <EventsContainer events={events} />
      </div>
    </div>
  );
}

export default HomePage;
