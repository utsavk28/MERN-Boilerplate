const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');
const usersRoutes = require('./routes/api/users');
const authRoutes = require('./routes/api/auth');

// App Initialized
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ limit: '30mb', extended: false }));
app.use(express.urlencoded({ limit: '30mb', extended: false }));
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.send('API Running');
});
app.use('/api/users', usersRoutes);
app.use('/api/auth', authRoutes);

//  Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Console Up and Running at Port ${PORT}`);
});
