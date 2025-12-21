import express from "express";
import validatePayload from "../../validatePayload.js";
import controller from "./category.controller.js";
import { verifyToken } from "../../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", controller.getCategories);
router.post("/", verifyToken, controller.addCategory);

export default router;
