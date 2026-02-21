import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

app.get("/", (req, res) => {
  res.send("<h1>Hello, World!</h1>");
});

io.on("connection", (socket) => {
  console.log("A user connected.");

  socket.on("message", (message) => {
    console.log(`Received message from ${socket.id}: ${message}`);
    io.emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected.");
  });
});

const port = 12106;
server.listen(port, () => {
  console.log(`Server is running on https://wispbyte.celesto.io`);
});