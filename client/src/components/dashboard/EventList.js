import React from 'react';

const EventList = ({ events }) => {
    return (
        <div className="event-list">
            <h2 className="text-2xl font-bold mb-4">Events List</h2>
            <ul className="space-y-4">
                {events.map(event => (
                    <li key={event._id} className="event-item p-4 bg-white rounded shadow">
                        <h3 className="text-xl font-semibold">{event.title}</h3>
                        <p className="text-gray-600">{event.description}</p>
                        <p className="text-gray-500">Date: {new Date(event.date).toLocaleDateString()}</p>
                        {/* Add RSVP button and QR code scanner icon as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;
