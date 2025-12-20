import { User } from "./user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SALT_ROUNDS = 10;

const createUser = async (req, res) => {
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
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    //hash password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({
        message: "Authentication failed",
      });
    }

    const token = jwt.sign({ userId: user.id }, "se3ret", {
      expiresIn: "1h",
    });

    const refreshToken = jwt.sign({ userId: user.id }, "se3ret-refresh", {
      expiresIn: "1d",
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "Login successful",
      data: {
        token,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export default {
  createUser,
  signIn,
};
