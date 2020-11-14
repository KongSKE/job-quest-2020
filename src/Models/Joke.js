import mongoose, { Schema } from "mongoose";

const JokeSchema = new Schema(
  {
    joke: String,
    like: Number,
    dislike: Number,
    deleted: Number, // 1 is deleted
    deleted_at: Date,
  },
  {
    autoCreate: true,
    timestamps: true,
  }
);

export const Joke = mongoose.model("Joke", JokeSchema);
