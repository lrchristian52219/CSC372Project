const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

// Middleware
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/api', productRoutes); // Product-related routes
app.use('/api/admin', adminRoutes); // Admin-related routes

// Default route for handling 404 errors
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

module.exports = app;