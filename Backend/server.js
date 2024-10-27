const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const interestRoutes = require('./routes/interestRoutes');
const cors = require('cors');
const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from the frontend
}));

dotenv.config();
connectDB();


app.use(express.json());



app.use('/api/auth', authRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/interests', interestRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
