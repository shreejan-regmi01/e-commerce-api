import { DataTypes } from "sequelize";
import { sequelize } from "../../db/index.js";

export const ProductCategories = sequelize.define(
  "ProductCategories",
  {
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: "products",
        key: "id",
      },
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: "categories",
        key: "id",
      },
    },
  },
  { tableName: "product_categories", createdAt: false, updatedAt: false }
);
