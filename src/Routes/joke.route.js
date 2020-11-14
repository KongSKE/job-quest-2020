import { Router } from "express";
import {
  deleteJokeById,
  dislikeJokeById,
  getAllJokes,
  getJokeById,
  likeJokeById,
  postNewJoke,
} from "../Controllers/joke.controller";

const route = Router();

route.route("/").get(getAllJokes).post(postNewJoke);
route.route("/:id").get(getJokeById);
route.route("/:id").delete(deleteJokeById);
route.route("/:id/like").post(likeJokeById);
route.route("/:id/dislike").post(dislikeJokeById);

export default route;
