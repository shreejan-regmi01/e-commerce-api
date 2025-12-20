import express from "express";
import { createUserValidator } from "./user.validations.js";
import validatePayload from "../../validatePayload.js";
import { User } from "./user.model.js";
import bcrypt from "bcrypt";
const router = express.Router();

const SALT_ROUNDS = 10;
router.get("/", (req, res) => {
  res.send("Users list");
});

router.post("/", createUserValidator, validatePayload, async (req, res) => {
  try {
    const { firstName, lastName, email, mobile, password } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ where: { mobile } });
    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    //hash password
    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    // Create user
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: passwordHash,
      mobile,
    });

    return res.status(201).json({
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

export default router;
