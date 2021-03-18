import { Server, Socket } from "socket.io";

import { Chat } from "./connected.types";

export const chatListener = (io: Server, socket: Socket) => {
  socket.on("chat", (data: Chat) => {
    console.log("I got data.", data);
    io.sockets.emit("chat", data);
  });
};
