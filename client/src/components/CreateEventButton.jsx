import React from 'react';

function CreateEventButton(props) {
  return (
    <div id="createBtnContainer">
      <button
        id="createBtn"
        onClick={() => {
          props.setForm(true);
        }}
      >
        Create Your Own Event
      </button>
    </div>
  );
}

export default CreateEventButton;
