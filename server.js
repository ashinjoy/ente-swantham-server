const net = require('net');

const server = net.createServer((socket) => {
  console.log('New client connected.');

  socket.on('data', (data) => {
    console.log('Received from client:', data.toString());

    socket.write('Echo: ' + data);
  });

  socket.on('end', () => {
    console.log('Client disconnected.');
  });

  socket.on('error', (err) => {
    console.error('Socket error:', err);
  });
});

server.listen(3000, () => {
  console.log('TCP server listening on port 3000');
});
