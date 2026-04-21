const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic routes
app.get('/', (req, res) => {
    res.send('Welcome to the WiFi Billing System API');
});

// Sample route for getting billing info
app.get('/billing', (req, res) => {
    // Logic to retrieve billing info goes here
    res.json({ message: 'Billing information will be returned here.' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});