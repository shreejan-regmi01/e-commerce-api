import express from "express";
import { createUserValidator, signInValidator } from "./user.validations.js";
import validatePayload from "../../validatePayload.js";
import controller from "./user.controller.js";
import { verifyToken } from "../../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users list");
});

router.post("/", createUserValidator, validatePayload, controller.createUser);
router.post("/sign-in", signInValidator, validatePayload, controller.signIn);
router.post("/refresh-token", controller.generateAuthTokenFromRefreshToken);
router.get("/me", verifyToken, controller.getLoggedInUser);

export default router;
