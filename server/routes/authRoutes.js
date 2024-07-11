import express from 'express';
const router = express.Router();


// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post('/login', (req, res) => {
    // Login logic
});

// @route    POST api/auth
// @desc     Register user
// @access   Public
router.post('/register', (req, res) => {
  // Register logic
});

export default router;
