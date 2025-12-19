import express from "express";
import userRoutes from "./modules/user/user.routes.js";

const apiV1 = express.Router();

apiV1.use("/users", userRoutes);
export { apiV1 };
