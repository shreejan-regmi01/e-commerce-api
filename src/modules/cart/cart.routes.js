import express from "express";
import validatePayload from "../../middleware/validatePayload.js";
import { verifyToken } from "../../middleware/authMiddleware.js";
import controller from "./cart.controller.js";
import { addCartItemValidator } from "./cart.validations.js";

const router = express.Router();

router.post(
  "/item",
  addCartItemValidator,
  validatePayload,
  verifyToken,
  controller.addCartItem
);

export default router;
