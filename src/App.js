import express from "express";
import mongoose from "mongoose";
import JokeRoute from "./Routes/joke.route";
import UserRoute from "./Routes/user.route";
import cors from "cors";
import { isLogin } from "./Middlewares/auth";

export default class App {
  constructor(port) {
    this.app = express();
    this.port = port;
    this.middlewares();
    this.route();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
    this.app.use(cors());
  }

  route() {
    this.app.use("/user", UserRoute);
    this.app.use(isLogin);
    this.app.use(JokeRoute);
  }

  async listen() {
    this.app.listen(this.port, () => {
      mongoose.connect("mongodb://localhost:27017/thaijoke", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
      });
      console.log("port running at", this.port);
    });
  }
}
