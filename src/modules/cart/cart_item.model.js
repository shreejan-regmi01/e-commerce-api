import { DataTypes } from "sequelize";
import { sequelize } from "../../db/index.js";
import { Sku } from "../product/sku.model.js";
import { User } from "../user/user.model.js";

export const CartItem = sequelize.define(
  "CartItem",
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: "users",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    skuId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: "skus",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "cart_items",
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

CartItem.belongsTo(Sku, {
  foreignKey: "skuId",
  as: "sku",
});

CartItem.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

User.hasMany(CartItem, {
  foreignKey: "userId",
  as: "cartItems",
});
