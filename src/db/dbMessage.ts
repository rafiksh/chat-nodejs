import mongoose from "mongoose";

export const MessageSchema = new mongoose.Schema({
  content: { type: String, required: true },
  timestamp: { type: String, required: true },
  sender_id: { type: String, required: true },
  receiver_id: { type: String, required: true },
});

export const Message = mongoose.model("Message", MessageSchema);
