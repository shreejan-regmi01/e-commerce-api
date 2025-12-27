import express from "express";
import validatePayload from "../../middleware/validatePayload.js";
import { verifyToken } from "../../middleware/authMiddleware.js";
import controller from "./cart.controller.js";
import {
  addCartItemValidator,
  updateCartItemValidator,
} from "./cart.validations.js";

const router = express.Router();

router.post(
  "/item",
  addCartItemValidator,
  validatePayload,
  verifyToken,
  controller.addCartItem
);

router.patch(
  "/item/:skuId/quantity",
  updateCartItemValidator,
  validatePayload,
  verifyToken,
  controller.updateCartItem
);

router.delete("/item/:skuId", verifyToken, controller.removeCartItem);

export default router;
