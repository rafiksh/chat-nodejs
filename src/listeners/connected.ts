import { Server, Socket } from "socket.io";
import { Message } from "../db/dbMessage";

import { Chat } from "./connected.types";

export const chatListener = (io: Server, socket: Socket) => {
  socket.on("chat", (data) => {
    console.log("I got data.", data);
    const message = new Message(data);
    message.save().then(() => {
      io.sockets.emit("chat", data);
    });
  });
};
