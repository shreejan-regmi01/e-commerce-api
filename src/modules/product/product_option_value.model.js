import { DataTypes } from "sequelize";
import { sequelize } from "../../db/index.js";

export const ProductOptionValue = sequelize.define(
  "ProductOptionValue",
  {
    optionId: {
      type: DataTypes.INTEGER,
      references: {
        model: "product_options",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "product_option_values", createdAt: false, updatedAt: false }
);
