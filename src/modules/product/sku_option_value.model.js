import { DataTypes } from "sequelize";
import { sequelize } from "../../db/index.js";

export const SkuOptionValue = sequelize.define(
  "SkuOptionValue",
  {
    skuId: {
      type: DataTypes.INTEGER,
      references: {
        model: "skus",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    optionValueId: {
      type: DataTypes.INTEGER,
      references: {
        model: "product_option_values",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
  },
  {
    tableName: "sku_option_values",
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    primaryKey: ["skuId", "optionValueId"],
  }
);
