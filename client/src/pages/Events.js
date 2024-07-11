import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'react-calendar/dist/Calendar.css';
import EventCard from '../components/events/EventCard.js';
import EventDetails from '../components/events/EventDetails.js';
import EventCalendar from '../components/events/EventCalendar.js';
import ReviewForm from '../components/feedback/ReviewForm.js';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('/api/events');
                setEvents(response.data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    const handleViewDetails = (event) => {
        setSelectedEvent(event);
    };

    const handleRSVP = (event) => {
        // Implement RSVP functionality
        console.log('RSVP clicked for event:', event);
    };

    const handleSubmitFeedback = (feedback) => {
        // Implement feedback submission
        console.log('Submitting feedback:', feedback);
    };

    const handleDateSelect = (date) => {
        setDate(date);
    };

    return (
        <div className="events-container p-8">
            {/* Intro Section */}
            <section className="intro-section mb-8">
                <h1 className="text-4xl font-bold">Upcoming Events</h1>
                <p className="mt-4 text-lg">Stay updated with our latest events and activities.</p>
            </section>

            {/* Event List Section */}
            <section className="event-list-section">
                {events.length === 0 ? (
                    <p className="text-lg">No upcoming events at the moment. Please check back later.</p>
                ) : (
                    <ul className="space-y-4">
                        {events.map((event) => (
                            <EventCard key={event._id} event={event} onViewDetails={handleViewDetails} />
                        ))}
                    </ul>
                )}
            </section>

            {/* Calendar Section */}
            <section className="calendar-section mt-8">
                <h2 className="text-3xl font-bold">Event Calendar</h2>
                <EventCalendar events={events} date={date} onDateSelect={handleDateSelect} />
            </section>

            {/* Event Details Section */}
            {selectedEvent && (
                <section className="event-details-section mt-8">
                    <EventDetails event={selectedEvent} onRSVP={handleRSVP} />
                    <ReviewForm onSubmitFeedback={handleSubmitFeedback} />
                </section>
            )}
        </div>
    );
};

export default Events;
