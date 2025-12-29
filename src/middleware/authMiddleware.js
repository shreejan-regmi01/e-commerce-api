import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../types/index.js";
import { User } from "../modules/user/user.model.js";
import { USER_TYPE } from "../types/index.js";

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

export async function verifyAdmin(req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Access denied" });
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.role !== USER_TYPE.ADMIN) {
      return res
        .status(401)
        .json({ error: "Access denied. Requires admin role." });
    }
    let user = await User.findByPk(decoded.userId);
    user = user.toJSON();
    delete user.password;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
}

export async function verifySeller(req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Access denied" });
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.role !== USER_TYPE.SELLER) {
      return res
        .status(401)
        .json({ error: "Access denied. Requires seller role." });
    }
    let user = await User.findByPk(decoded.userId);
    user = user.toJSON();
    delete user.password;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
}

export async function verifyCustomer(req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Access denied" });
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.role !== USER_TYPE.CUSTOMER) {
      return res
        .status(401)
        .json({ error: "Access denied. Requires customer role." });
    }
    let user = await User.findByPk(decoded.userId);
    user = user.toJSON();
    delete user.password;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
}
