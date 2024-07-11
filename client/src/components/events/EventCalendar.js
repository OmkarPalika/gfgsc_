import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const EventCalendar = ({ events, onDateSelect }) => {
    return (
        <div className="calendar mt-4">
            <Calendar
                onClickDay={onDateSelect}
                tileContent={({ date }) => {
                    const event = events.find(
                        (event) => new Date(event.date).toDateString() === date.toDateString()
                    );
                    return event ? <span className="event-indicator">•</span> : null;
                }}
            />
        </div>
    );
};

export default EventCalendar;
