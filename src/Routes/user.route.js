import { Router } from "express";
import { createUser, getAllUsers, login } from "../Controllers/user.controller";

const route = Router();

route.route("/").get(getAllUsers);
route.route("/login").post(login);
route.route("/create").post(createUser);

export default route;
