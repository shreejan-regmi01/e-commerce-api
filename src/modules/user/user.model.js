import { DataTypes } from "sequelize";
import { sequelize } from "../../db/index.js";

// const sequelize = new Sequelize("sqlite::memory:");

export const User = sequelize.define("User", {
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
