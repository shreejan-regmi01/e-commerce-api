import express from "express";
import { createUserValidator } from "./user.validations.js";
import validatePayload from "../../validatePayload.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users list");
});

router.post("/", createUserValidator, validatePayload, (req, res) => {
  res.send("good payload");
});

export default router;
