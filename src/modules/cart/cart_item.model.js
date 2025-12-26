import { DataTypes } from "sequelize";
import { sequelize } from "../../db/index.js";

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
