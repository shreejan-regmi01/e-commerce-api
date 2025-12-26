import { DataTypes } from "sequelize";
import { sequelize } from "../../db/index.js";
import { ProductOptionValue } from "./product_option_value.model.js";
import { SkuOptionValue } from "./sku_option_value.model.js";

export const Sku = sequelize.define(
  "Sku",
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
    skuCode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  { tableName: "skus" }
);

//Sku <-> Sku Option Value association
Sku.belongsToMany(ProductOptionValue, {
  through: SkuOptionValue,
  foreignKey: "skuId",
  otherKey: "optionValueId",
  as: "skuOptionValues",
});
ProductOptionValue.belongsToMany(Sku, {
  through: SkuOptionValue,
  foreignKey: "optionValueId",
  otherKey: "skuId",
  as: "skus",
});
