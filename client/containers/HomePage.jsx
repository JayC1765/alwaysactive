import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SideBarContainer from './SideBarContainer';
import EventsContainer from './EventsContainer';
import EventBox from '../components/EventBox';
import Logo from './Logo';

function HomePage(props) {
  const { state } = useLocation();
  const [formOpened, setForm] = useState(false);
  const [eventsArr, setEventsArr] = useState([]);
  const [eventSaved, setEventSaved] = useState(false);
  const [doneFetching, setDoneFetching] = useState(false);

  const getEvents = async () => {
    const response = await fetch('/events', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: state }),
    });
    const data = await response.json();
    setEventsArr(data);
    setDoneFetching(true);
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

  const renderEventBoxes = () => eventsArr.map((event, i) => {
    const dateObj = new Date(event.time);
    return (
      <EventBox
        key={`EventBox ${i}`}
        index={i}
        name={event.name}
        city={event.city}
        state={event.state}
        description={event.description}
        owner={event.username}
        eventId={event._id}
        rsvpStatus={event.userstatus}
        user={state}
        date={dateObj.toLocaleDateString()}
        time={dateObj.toLocaleTimeString()}
        getEvents={getEvents}
        toggleRsvp={toggleRsvp}
      />
    );
  });

  return doneFetching ? (
    <div>
      <div className="user-header">
        <Logo />
        <button id="logOutBtn" type="submit">
          Log out
        </button>
      </div>
      <div id="ContainerParent">
        <SideBarContainer
          username={state}
          formOpened={formOpened}
          setForm={setForm}
          getEvents={getEvents}
          getFilteredEvents={getFilteredEvents}
        />
        <div id="EventsContainer">{renderEventBoxes()}</div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default HomePage;
