const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socket = require('socket.io');
const io = socket(server);
const port = 3000;


// // Serve static files from the 'public' directory
// app.use(express.static('public'));

// Serve index.html as the default page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
  
  
// Start the server
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
