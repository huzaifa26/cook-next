import { Server } from "socket.io";

export default function handler(req, res) {
  if (res.socket.server.io) {
    res.end();
    return;
  } else {
    console.log("not running..........");
  }

  const httpServer = res.socket.server

  const io = new Server(httpServer, {
    path: "/api/socket",
    addTrailingSlash: false,
    pingInterval: 5000,
    pingTimeout: 10000,
  });

  res.socket.server.io = io;

  io.on('connection', (socket) => {
    console.log('A new client connected.')

    socket.on('joinRoom', (roomId) => {
      socket.join(roomId);
    });

    socket.on('message', (data) => {
      io.emit('new-message', { receiverId: data?.receiverId, data: data.data });
    })

    socket.on('disconnect', () => {
      console.log('A client disconnected.');
    });
  });


  console.log("Socket server started successfully");
  res.end();
}