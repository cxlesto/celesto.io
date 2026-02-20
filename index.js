import { createServer } from 'http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

const port = 12106;
server.listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});