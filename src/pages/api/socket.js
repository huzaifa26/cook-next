import { Server } from "socket.io";

let rooms = {};
const roomUserCounts = {};

export default function handler(req, res) {
  if (res.socket.server.io) {
    rooms={};
    res.end();
    return;
  } else {
    console.log("not running..........");
  }

  const httpServer = res.socket.server

  const io = new Server(httpServer, {
    path: "/api/socket",
    addTrailingSlash: false,
    // pingInterval: 5000,
    // pingTimeout: 10000,
  });

  res.socket.server.io = io;

  io.on('connection', (socket) => {
    // console.log('A new client connected.')

    socket.on('joinRoom', (roomId) => {
      socket.join(roomId);
    });

    socket.on('message', (data) => {
      io.emit('new-message', { receiverId: data?.receiverId, data: data.data });
    })

    // socket.on('join-room', (roomId) => {
    //   console.log("Room joined", roomId);
    //   socket.join(roomId);

    //   const roomClients = io.sockets.adapter.rooms.get(roomId);
    //   roomClients.clear
    //   console.log(roomClients);
    //   if (roomClients && roomClients.size === 2) {
    //     io.to(roomId).emit('start-call');
    //   }
    // });

    // socket.on('signal', (signal, roomId) => {
    //   socket.to(roomId).emit('signal', signal);
    // });

    // socket.on('disconnect', () => {
    //   console.log('A client disconnected.');

    //   const rooms = io.sockets.adapter.rooms;
    //   // Check all rooms for the disconnected socket and remove it from the room
    //   rooms.forEach((clients, roomId) => {
    //     if (clients.has(socket.id)) {
    //       socket.leave(roomId);
    //       console.log('Socket removed from room:', roomId);
    //     }
    //   });

    // });

    socket.on('join-room', (roomId) => {
      console.log("User joined room:", roomId);
      socket.join(roomId);
    
      // Check the number of users in the room using socket.rooms.size
      if (socket.rooms.size === 2) {
        // Notify all users in the room that both users have joined
        io.to(roomId).emit('start-call');
      }
    
      console.log("Number of users in room:", socket.rooms.size);
    });
    
    socket.on('offer-sdp', (data) => {
      const { sdp, roomId } = data;
      // Send the offer SDP to the other user in the room
      socket.to(roomId).emit('answer-sdp', { sdp, sender: socket.id });
    });
    
    socket.on('answer-sdp', (data) => {
      const { sdp, roomId } = data;
      // Send the answer SDP to the other user in the room
      socket.to(roomId).emit('remote-ice-candidate', { sdp, sender: socket.id });
    });
    
    socket.on('ice-candidate', (data) => {
      const { candidate, roomId } = data;
      // Send the ICE candidate to the other user in the room
      socket.to(roomId).emit('remote-ice-candidate', { candidate, sender: socket.id });
    });
    
    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    
      // Get the list of rooms the socket is currently in using socket.rooms
      const rooms = Array.from(socket.rooms);
    
      // Remove the socket's own id from the list of rooms
      rooms.splice(rooms.indexOf(socket.id), 1);
    
      // Notify other users in the room that the user has left
      rooms.forEach((roomId) => {
        socket.to(roomId).emit('user-disconnected', socket.id);
      });
    });

  });

  console.log("Socket server started successfully");
  res.end();
}