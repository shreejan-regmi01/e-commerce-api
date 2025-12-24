import express from "express";
import { createUserValidator, signInValidator } from "./user.validations.js";
import validatePayload from "../../middleware/validatePayload.js";
import controller from "./user.controller.js";
import { verifyAdmin, verifyToken } from "../../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", createUserValidator, validatePayload, controller.createUser);
router.post(
  "/admin",
  createUserValidator,
  validatePayload,
  verifyAdmin,
  controller.createAdminUser
);
router.post("/sign-in", signInValidator, validatePayload, controller.signIn);
router.post("/refresh-token", controller.generateAuthTokenFromRefreshToken);
router.get("/me", verifyToken, controller.getLoggedInUser);

export default router;
