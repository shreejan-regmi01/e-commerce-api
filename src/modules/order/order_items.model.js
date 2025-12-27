import { DataTypes } from "sequelize";
import { sequelize } from "../../db/index.js";
import { Order } from "./order.model.js";

export const OrderItem = sequelize.define(
  "OrderItem",
  {
    orderId: {
      type: DataTypes.INTEGER,
      references: {
        model: "orders",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    skuId: {
      type: DataTypes.INTEGER,
      references: {
        model: "skus",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    productNameSnapshot: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    skuCodeSnapshot: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    priceSnapshot: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "order_items",
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

Order.hasMany(OrderItem, { foreignKey: "orderId", as: "orderItems" });
OrderItem.belongsTo(Order, { foreignKey: "orderId", as: "order" });
