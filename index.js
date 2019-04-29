// Import Express
const express = require('express');

// Routes
const postRoutes = require('./posts/postRoutes');
const userRoutes = require('./users/userRoutes');

// Initialize Express
const server = express();

// Middleware
server.use(express.json());

// Use Routes
server.use('/api/posts', postRoutes);
server.use('/api/users', userRoutes);

// Test
server.use('/', (req, res) => {
    res.status(200).send("It's aliiivvveee!!!");
});

// Running Server
server.listen(4000, () => {
    console.log('\n** API up and running on port 4k **');
});
