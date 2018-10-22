const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3333;
// express server
const app = express();
// wrapper for both servers
var server = http.createServer(app);
// socket.io server
var io = socketIO(server);

app.use(express.static(publicPath));
io.on('connection', (socket) => {
  // socket ~ individual socket
  console.log('new user connected');
  // socket.emit('newMessage', {
  //   from: 'server',
  //   createdAt: 12323423423,
  //   text: 'Welcome to the chat'
  // });
  socket.on('createMessage', (message) => {
    console.log('message created by client', message);
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(port, () => {
  console.log('Server is started on port ' + port);
});
