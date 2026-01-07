import express from "express";
import { createOrderValidator } from "./order.validations.js";
import validatePayload from "../../middleware/validatePayload.js";
import { verifyCustomer } from "../../middleware/authMiddleware.js";
import controller from "./order.controller.js";

const router = express.Router();

router.post(
  "/",
  createOrderValidator,
  validatePayload,
  verifyCustomer,
  controller.createOrder
);

router.get("/", verifyCustomer, controller.getOrders);

export default router;
