import { DataTypes } from "sequelize";
import { sequelize } from "../../db/index.js";
import { ProductOptionValue } from "./product_option_value.model.js";

export const ProductOption = sequelize.define(
  "ProductOption",
  {
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: "products",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "product_options", createdAt: false, updatedAt: false }
);

ProductOption.hasMany(ProductOptionValue, { foreignKey: "optionId" });
ProductOptionValue.belongsTo(ProductOption, { foreignKey: "optionId" });
