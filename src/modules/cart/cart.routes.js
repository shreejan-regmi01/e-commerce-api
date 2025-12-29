import express from "express";
import validatePayload from "../../middleware/validatePayload.js";
import { verifyCustomer } from "../../middleware/authMiddleware.js";
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
  verifyCustomer,
  controller.addCartItem
);

router.patch(
  "/item/:skuId/quantity",
  updateCartItemValidator,
  validatePayload,
  verifyCustomer,
  controller.updateCartItem
);

router.delete("/item/:skuId", verifyCustomer, controller.removeCartItem);

export default router;
