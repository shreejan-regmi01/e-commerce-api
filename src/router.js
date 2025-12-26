import express from "express";
import userRoutes from "./modules/user/user.routes.js";
import categoryRoutes from "./modules/category/category.routes.js";
import productRoutes from "./modules/product/product.routes.js";
import cartRoutes from "./modules/cart/cart.routes.js";
const apiV1 = express.Router();

apiV1.use("/user", userRoutes);
apiV1.use("/category", categoryRoutes);
apiV1.use("/product", productRoutes);
apiV1.use("/cart", cartRoutes);
export { apiV1 };
