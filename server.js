const express = require('express');
const path = require('path');
const app = express();

// Set the port from environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Route for the root URL - serve home.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`La Bella Cucina server is running on port ${PORT}`);
});




