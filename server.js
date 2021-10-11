const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
app.use(express.static('public'));

const server = http.createServer(app);
const io = new Server(server);

app.get('/room/:roomId', (req, res) => {
    res.sendFile(`${__dirname}/public/room.html`);
});

server.listen(1337, () => console.log('server is running on port 1337'));