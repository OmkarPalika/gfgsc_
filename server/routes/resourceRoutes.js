import express from 'express';
const router = express.Router();

// @route    GET api/resources
// @desc     Get all resources
// @access   Public
router.get('/', (req, res) => {
    // Get all resources
});

// @route    POST api/resources
// @desc     Create a resource
// @access   Private
router.post('/', (req, res) => {
    // Create a resource
});

// @route    PUT api/resources/:id
// @desc     Update a resource
// @access   Private
router.put('/:id', (req, res) => {
    // Update a resource
});

// @route    DELETE api/resources/:id
// @desc     Delete a resource
// @access   Private
router.delete('/:id', (req, res) => {
    // Delete a resource
});

export default router;