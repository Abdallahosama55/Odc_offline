import React from 'react';

const Notification = ({ message, timestamp }) => {
  return (
    <div className="notification">
      <p>{message}</p>
      <small>{timestamp}</small>
    </div>
  );
};

export default Notification;
