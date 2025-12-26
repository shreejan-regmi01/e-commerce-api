import express from "express";
import {
  createProductSkuValidator,
  createProductValidator,
} from "./product.validations.js";
import validatePayload from "../../middleware/validatePayload.js";
import { verifyToken } from "../../middleware/authMiddleware.js";
import controller from "./product.controller.js";

const router = express.Router();

router.post(
  "/",
  createProductValidator,
  validatePayload,
  verifyToken,
  controller.createProduct
);

router.post(
  "/:productId/sku",
  createProductSkuValidator,
  validatePayload,
  verifyToken,
  controller.createProductSku
);

router.get("/:slug", controller.getProductBySlug);

export default router;
