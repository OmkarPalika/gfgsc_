import React from 'react';

const Notification = ({ message, type }) => {
  const notificationStyles = {
    success: "bg-green-500 text-white p-4 rounded",
    error: "bg-red-500 text-white p-4 rounded",
    warning: "bg-yellow-500 text-black p-4 rounded"
  };

  return (
    <div className={notificationStyles[type]}>
      {message}
    </div>
  );
};

export default Notification;
