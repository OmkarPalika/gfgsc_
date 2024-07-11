import express from 'express';
import { getEvents, createEvent, updateEvent, deleteEvent } from '../controllers/eventController.js';
const router = express.Router();

// @route    GET api/events
// @desc     Get all events
// @access   Public
router.get('/', getEvents);

// @route    POST api/events
// @desc     Create an event
// @access   Private
router.post('/', createEvent);

// @route    PUT api/events/:id
// @desc     Update an event
// @access   Private
router.put('/:id', updateEvent);

// @route    DELETE api/events/:id
// @desc     Delete an event
// @access   Private
router.delete('/:id', deleteEvent);

export default router;
