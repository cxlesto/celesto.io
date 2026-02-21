import express from "express";
import { createServer } from "http";

const app = express();
const server = createServer(app);

app.get("/", (req, res) => {
  res.send("<h1>Hello, World!</h1>");
});

const port = 12106;
server.listen(port, () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});