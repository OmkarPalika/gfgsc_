import React from 'react';

const EventDetails = ({ event, onRSVP }) => {
    return (
        <div className="event-details bg-white p-8 rounded shadow">
            <h2 className="text-3xl font-bold">{event.title}</h2>
            <p className="mt-2 text-lg">{event.description}</p>
            <p className="mt-1 text-gray-500">Date: {new Date(event.date).toLocaleDateString()}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700" onClick={() => onRSVP(event)}>RSVP</button>
            <span className="ml-4">
                <img src="/scanner-icon.svg" alt="Scanner Icon" className="h-6 w-6" />
            </span>
        </div>
    );
};

export default EventDetails;
