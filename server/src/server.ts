import "dotenv/config";
import http from "http";
import express from "express";
import { Server } from "socket.io";
import { generateRoomId } from "./utils/generateRoomId";

const PORT = process.env.PORT;
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    credentials: true,
  },
});

const avaliableRooms: string[] = [];

io.on("connection", (socket) => {
  let currentRoom: string;

  socket.on("join to room", (callback) => {
    if (currentRoom !== null) return;

    let room;

    if (avaliableRooms.length) {
      room = avaliableRooms.shift();
      socket.join(room);
      currentRoom = room;
      socket.emit("ready room");
    } else {
      room = generateRoomId();
      avaliableRooms.push(room);
      socket.join(room);
      currentRoom = room;
    }

    callback(room);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
