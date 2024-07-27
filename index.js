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

io.on('connection', (socket) => {

    // user connection message
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });


    // listen for chat message

    socket.on('userMessage', (msg) => {
        console.log('message: ' + msg);
        io.emit('userMessage', msg);
    });


});





  
  
// Start the server
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
