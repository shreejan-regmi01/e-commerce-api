import express from "express";
import { createOrderValidator } from "./order.validations.js";
import validatePayload from "../../middleware/validatePayload.js";
import { verifyToken } from "../../middleware/authMiddleware.js";
import controller from "./order.controller.js";

const router = express.Router();

router.post(
  "/",
  createOrderValidator,
  validatePayload,
  verifyToken,
  controller.createOrder
);

export default router;
