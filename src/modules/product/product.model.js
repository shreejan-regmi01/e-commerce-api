import { DataTypes } from "sequelize";
import { sequelize } from "../../db/index.js";
import { Category } from "../category/category.model.js";

// const sequelize = new Sequelize("sqlite::memory:");

export const Product = sequelize.define(
  "Product",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
    },
    brand: {
      type: DataTypes.STRING,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: "products",
  }
);

const ProductCategories = sequelize.define(
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

Product.belongsToMany(Category, {
  through: ProductCategories,
});
Category.belongsToMany(Product, {
  through: ProductCategories,
});
