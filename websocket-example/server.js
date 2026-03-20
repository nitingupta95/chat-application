import { Server } from "socket.io";
import http from "http";

const server = http.createServer();
const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("✅ New user connected:", socket.id);

  // Send to EVERYONE (including sender)
  io.emit("welcome", `Welcome on onboard`);

  // Send to ONLY the current client
  socket.emit("only-socket", `Hello Socket - ${socket.id}`);

  // Send to EVERYONE EXCEPT the sender
  socket.broadcast.emit("user:joined", `A Socket ${socket.id} joined`);

  // Join a room in socket.io
  socket.join("room1");

  // Send to a specific room (example: room1 group)
  io.to("room1").emit("room1:message", `Welcome to room1`);

  //Send to all in a room EXCEPT the sender
  io.to("room1").except(socket.id).emit("Someone joined the room");

  // Send to all in a room EXCEPT the sender
  socket.to("room1").emit("room1:message", "Nwe message from  ", socket.id);

  //Listen to event (.on())
  socket.on("welcome", (msg) => {
    console.log(msg);
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

server.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
