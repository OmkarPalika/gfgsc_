import express from 'express';
<<<<<<< HEAD
import cors from 'cors';
import dotenv from 'dotenv';
import admin from 'firebase-admin';
import authRoutes from './routes/authRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import resourceRoutes from './routes/resourceRoutes.js';
import connectDB from './config/database.js';
import serviceAccount from './serviceAccountKey.json';
=======
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import resourceRoutes from './routes/resourceRoutes.js';
>>>>>>> d098abb31da788da7bc1b3bd1a51c17107121227

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

<<<<<<< HEAD
// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// Middleware for Firebase Authentication
const firebaseAuthMiddleware = async (req, res, next) => {
    const headerToken = req.header('Authorization');
    if (!headerToken) return res.status(401).json({ message: 'No token, authorization denied' });

    try {
        const decodedToken = await admin.auth().verifyIdToken(headerToken);
        req.user = decodedToken;
        next();
    } catch (err) {
        console.error('Error while verifying Firebase token:', err);
        res.status(403).json({ message: 'Unauthorized' });
    }
};

// Connect to MongoDB
connectDB();

// Middleware for authentication
import authMiddleware from './middleware/auth.js';
app.use(authMiddleware);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', firebaseAuthMiddleware, eventRoutes);
app.use('/api/resources', firebaseAuthMiddleware, resourceRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
=======
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/resources', resourceRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(err => console.log(err));
>>>>>>> d098abb31da788da7bc1b3bd1a51c17107121227
