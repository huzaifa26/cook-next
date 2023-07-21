import { Server } from "socket.io";


export default function handler(req, res) {
  if (res.socket.server.io) {
    console.log('Server already started');
    res.end();
    return;
  }
  const io = new Server(res.socket.server, {
    path: '/api/socket',
    addTrailingSlash: false
  })
  res.socket.server.io = io;

  io.on('connection', (socket) => {
    console.log('A new client connected.');

    // Handle events from the client
    socket.on('message', (data) => {
      console.log('Received message:', data);
      // Broadcast the message to all connected clients
      io.emit('message', data);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('A client disconnected.');
    });
  });


  console.log("Socket server started successfully");
  res.end();
}