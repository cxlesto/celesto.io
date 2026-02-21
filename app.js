const socket = io("https://wispbyte.celesto.io");

socket.on("message", (message) => {
  alert(`Received message: ${message}`);
});

function sendMessage() {
  const messageInput = document.getElementById("messageInput");
  const message = messageInput.value;
  socket.emit("message", message);
  messageInput.value = "";
}