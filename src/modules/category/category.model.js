import { DataTypes } from "sequelize";
import { sequelize } from "../../db/index.js";

// const sequelize = new Sequelize("sqlite::memory:");

export const Category = sequelize.define(
  "Category",
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
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "categories",
        key: "id",
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE",
    },
  },
  {
    tableName: "categories",
  }
);

Category.hasMany(Category, {
  as: "children",
  foreignKey: "parentId",
});

Category.belongsTo(Category, {
  as: "parent",
  foreignKey: "parentId",
});
