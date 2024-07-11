export const formatEventDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

export const filterUpcomingEvents = (events) => {
    const now = new Date();
    return events.filter(event => new Date(event.date) >= now);
};

export const sortEventsByDate = (events) => {
    return events.sort((a, b) => new Date(a.date) - new Date(b.date));
};
