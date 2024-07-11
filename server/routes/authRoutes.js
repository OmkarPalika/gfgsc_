import express from 'express';
<<<<<<< HEAD
import { login, register } from '../controllers/authController.js';
const router = express.Router();

// @route    POST api/auth/login
// @desc     Authenticate user & get token
// @access   Public
router.post('/login', login);

// @route    POST api/auth/register
// @desc     Register user
// @access   Public
router.post('/register', register);
=======
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
>>>>>>> d098abb31da788da7bc1b3bd1a51c17107121227

export default router;
