import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  role: { type: String, enum: ["user", "member", "admin"], default: "user" }
}, { timestamps: true });

export default mongoose.model("User", userSchema);
