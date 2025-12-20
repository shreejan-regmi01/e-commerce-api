import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../types/index.js";
import { User } from "../modules/user/user.model.js";

export async function verifyToken(req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Access denied" });
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    let user = await User.findByPk(decoded.userId);
    user = user.toJSON();
    delete user.password;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
}
