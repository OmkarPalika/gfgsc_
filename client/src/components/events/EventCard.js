import React from 'react';

const EventCard = ({ event, onViewDetails }) => {
    return (
        <li className="event-item p-4 bg-white rounded shadow">
            <h2 className="text-2xl font-bold">{event.title}</h2>
            <p className="mt-2 text-lg">{event.description}</p>
            <p className="mt-1 text-gray-500">Date: {new Date(event.date).toLocaleDateString()}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700" onClick={() => onViewDetails(event)}>View Details</button>
        </li>
    );
};

export default EventCard;
