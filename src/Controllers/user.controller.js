import { User } from "../Models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
require("dotenv").config();

export const createUser = async (req, res) => {
  try {
    const username = req.body.username;
    let checkUser = await User.findOne({ username: username });
    if (checkUser) {
      return res.json({ message: "This username is already exist" });
    }
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(req.body.password, salt);
    let user = new User({
      username: username,
      password: passwordHash,
    });
    console.log(passwordHash);
    if (user.save()) {
      return res.json({ message: "create User successfully" });
    }
    return res.json({ message: "cannot create User" });
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async (req, res) => {
  let allUsers = await User.find();
  return res.json(allUsers);
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.json({ message: "please login first" });
  }
  let user = await User.findOne({
    username,
  });
  if (!user) {
    return res.json({ message: "This account doesn't exist in this system" });
  }

  console.log(username);
  console.log(password);
  const checkPassword = await bcrypt.compare(password, user.password);
  console.log(checkPassword);

  if (checkPassword) {
    console.log("password is correct");
    const token = jwt.sign({ username }, process.env.SECRET_KEY);
    return res.json({ token: token });
  } else {
    return res.json({ message: "try again next time" });
  }
};
