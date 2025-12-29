import express from "express";
import validatePayload from "../../middleware/validatePayload.js";
import controller from "./category.controller.js";
import { createCategoryValidator } from "./category.validations.js";
import { verifyAdmin } from "../../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", controller.getCategories);
router.get("/:categoryId/products", controller.getProductsByCategory);
router.post(
  "/",
  createCategoryValidator,
  validatePayload,
  verifyAdmin,
  controller.addCategory
);

export default router;
