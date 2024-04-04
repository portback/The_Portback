const io = require("socket.io");

const startServer = async () => {
  const server = io("3000", {
    cors: {
      origin: ["http://localhost:3000"],
    },
  });
  
  
};

startServer();
