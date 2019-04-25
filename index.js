// code away!
const express = require('express');

const server = express();

server.use('/', (req, res) => {
    res.status(200).send("It's aliiivvveee!!!");
});

server.listen(4000, () => {
    console.log('\n** API up and running on port 4k **');
});
