import express, { Application } from "express";
import { Server, Socket } from "socket.io";
import { Server as httpServer } from "http";

import { defaultRouter } from "./routers/default";
import { userRouter } from "./routes/user";
import { PORT } from "./config/config.env";
import { chatListener } from "./listeners/connected";

const app: Application = express();
const server = new httpServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST"],
  },
});

app.use("/", userRouter(defaultRouter(), null));

io.on("connection", (socket: Socket) => {
  console.log("User Connected", socket.id);

  chatListener(io, socket);
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
