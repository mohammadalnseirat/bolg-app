import mongoose from "mongoose";
import { type } from "os";

// create user schema:
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 8,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// create a model:
const User = mongoose.model("User", userSchema);

export default User;
