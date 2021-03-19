import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  mobile_number: { type: String, required: true },
});
export const User = mongoose.model("User", UserSchema);
