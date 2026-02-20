import https from 'https';
import { Server } from 'socket.io';
import fs from 'fs';

let options = {
  key: fs.readFileSync('./certs/private.key.pem'),
  cert: fs.readFileSync('certs/domain.cert.pem'),
}

const server = https.createServer(options, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Socket.IO server is running.\n');
});
const io = new Server(server, {
  cors: { origin: '*' }
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
  console.log(`Listening on port ${port}`);
});