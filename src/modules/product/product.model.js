import { DataTypes } from "sequelize";
import { sequelize } from "../../db/index.js";
import { Category } from "../category/category.model.js";
import { User } from "../user/user.model.js";
import { ProductCategories } from "./product_categories.model.js";
import { ProductOption } from "./product_option.model.js";

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
    addedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "users",
        key: "id",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    },
  },
  {
    tableName: "products",
  }
);

//Product <-> User association
Product.belongsTo(User, { foreignKey: "addedBy" });
User.hasMany(Product, { foreignKey: "addedBy" });

//Product <-> Category association
Product.belongsToMany(Category, {
  through: ProductCategories,
  foreignKey: "productId", // column in product_categories pointing to Product
  otherKey: "categoryId", // column in product_categories pointing to Category
});
Category.belongsToMany(Product, {
  through: ProductCategories,
  foreignKey: "categoryId", // column in product_categories pointing to Category
  otherKey: "productId", // column in product_categories pointing to Product
});

//Product <-> Product Option association
Product.hasMany(ProductOption, { foreignKey: "productId" });
ProductOption.belongsTo(Product, { foreignKey: "productId" });
