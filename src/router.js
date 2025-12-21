import express from "express";
import userRoutes from "./modules/user/user.routes.js";
import categoryRoutes from "./modules/category/category.routes.js";

const apiV1 = express.Router();

apiV1.use("/user", userRoutes);
apiV1.use("/category", categoryRoutes);
export { apiV1 };
