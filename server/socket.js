import { createServer } from 'http';
import { Server } from 'socket.io';

const server = createServer();
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log('A user connected.');

  socket.on("message", (message) => {
    console.log("Received message:", message);
    io.emit("message", message);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected.');
  });
});

const port = 24990;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});