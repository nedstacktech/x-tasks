const { Server } = require("socketio");
const keys = require("./keys");

const io = new Server(keys.PORT, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", function () {
  console.log("connected");
});

module.exports = io;