import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    password: String,
  },
  {
    autoCreate: true,
    timestamps: true,
  }
);

export const User = mongoose.model("User", UserSchema);
