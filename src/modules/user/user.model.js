// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   role: { type: String, enum: ["user", "member", "admin"], default: "user" }
// }, { timestamps: true });

// export default mongoose.model("User", userSchema);


import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    photo: String,
    password: String,
    role: { type: String, default: "user" },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
