import express from 'express';
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

export default router;
