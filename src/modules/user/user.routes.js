import express from "express";
import { createUserValidator, signInValidator } from "./user.validations.js";
import validatePayload from "../../validatePayload.js";
import controller from "./user.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users list");
});

router.post("/", createUserValidator, validatePayload, controller.createUser);
router.post("/sign-in", signInValidator, validatePayload, controller.signIn);

/**
 * TODO:
 * extract the route handler of above route to controller file
 * add login route
 */

export default router;
