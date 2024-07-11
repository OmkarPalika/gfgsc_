import Event from '../models/Event.js';

// @desc     Get all events
// @route    GET /api/events
// @access   Public
export const getEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc     Create an event
// @route    POST /api/events
// @access   Private
export const createEvent = async (req, res) => {
    const { name, description, date } = req.body;
    try {
        const event = new Event({ name, description, date });
        await event.save();
        res.json(event);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc     Update an event
// @route    PUT /api/events/:id
// @access   Private
export const updateEvent = async (req, res) => {
    const { id } = req.params;
    const { name, description, date } = req.body;
    try {
        const event = await Event.findById(id);
        if (!event) return res.status(404).json({ message: 'Event not found' });
        event.name = name;
        event.description = description;
        event.date = date;
        await event.save();
        res.json(event);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc     Delete an event
// @route    DELETE /api/events/:id
// @access   Private
export const deleteEvent = async (req, res) => {
    const { id } = req.params;
    try {
        const event = await Event.findById(id);
        if (!event) return res.status(404).json({ message: 'Event not found' });
        await event.remove();
        res.json({ message: 'Event deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
