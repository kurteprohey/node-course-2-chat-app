socket = io();

socket.on('connect', () => {
  console.log('we are connected to server');
  const payload = {from: 'andrew@gmail.com', text: 'works for me'};
  socket.emit('createMessage', payload);  
});

socket.on('disconnect', () => {
  console.log('disconnected');
});

socket.on('newMessage', (data) => {
  console.log('you have got new message', data);
});
