import jwt from "jsonwebtoken";
require("dotenv").config();
export const isLogin = async (req, res, next) => {
  try {
    const token = req.body.token;
    let decode = jwt.verify(token, process.env.SECRET_KEY);
    console.log("decode", decode);
    next();
  } catch (error) {
    return res.json({ message: "token is invalid" });
  }
};
