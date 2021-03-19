import express, { Application } from "express";
import { Server, Socket } from "socket.io";
import { Server as httpServer } from "http";
import mongoose from "mongoose";

import { MONGODB_URL } from "./config/dbconfig";
import { defaultRouter } from "./routers/default";
import { userRouter } from "./routes/user";
import { PORT } from "./config/config.env";
import { chatListener } from "./listeners/connected";

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb is connected..."))
  .catch((err) => console.log(err));

const DUMMY_USER = {
  id: 1,
  username: "john",
};

const app: Application = express();
const server = new httpServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST"],
  },
});

app.use("/", userRouter(defaultRouter(), mongoose));

io.on("connection", (socket: Socket) => {
  const id = socket.handshake.query.id;
  id && socket.join(id);
  console.log("User Connected", socket.id);

  chatListener(io, socket);
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
