import express, { json } from 'express';
import connectDB from './config/database';

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
