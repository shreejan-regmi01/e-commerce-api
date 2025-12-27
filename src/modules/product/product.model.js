import { DataTypes } from "sequelize";
import { sequelize } from "../../db/index.js";
import { Category } from "../category/category.model.js";
import { User } from "../user/user.model.js";
import { ProductCategories } from "./product_categories.model.js";
import { ProductOption } from "./product_option.model.js";
import { Sku } from "./sku.model.js";

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
Product.belongsTo(User, { foreignKey: "addedBy", as: "user" });
User.hasMany(Product, { foreignKey: "addedBy", as: "productsAdded" });

//Product <-> Category association
Product.belongsToMany(Category, {
  through: ProductCategories,
  foreignKey: "productId", // column in product_categories pointing to Product
  otherKey: "categoryId", // column in product_categories pointing to Category
  as: "categories",
});
Category.belongsToMany(Product, {
  through: ProductCategories,
  foreignKey: "categoryId", // column in product_categories pointing to Category
  otherKey: "productId", // column in product_categories pointing to Product
  as: "products",
});

//Product <-> Product Option association
Product.hasMany(ProductOption, {
  foreignKey: "productId",
  as: "productOptions",
});
ProductOption.belongsTo(Product, { foreignKey: "productId", as: "product" });

//Product <-> Sku association
Product.hasMany(Sku, {
  foreignKey: "productId",
  as: "productSkus",
});
Sku.belongsTo(Product, { foreignKey: "productId", as: "product" });
