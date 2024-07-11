import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import admin from 'firebase-admin';
import authRoutes from './routes/authRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import resourceRoutes from './routes/resourceRoutes.js';
import connectDB from './config/database.js';
import serviceAccount from './serviceAccountKey.json';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

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
