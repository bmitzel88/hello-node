// Import express module
import express from 'express';



// Instantiate an express object
const app = express();

// Define a port number where our server will listen
const PORT = 3000;

// Define the root path
app.get('/', (req, res) => {

    res.send('Hello, World!');

});


// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});