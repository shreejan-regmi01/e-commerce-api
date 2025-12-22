import { DataTypes } from "sequelize";
import { sequelize } from "../../db/index.js";
import { USER_TYPE } from "../../types/index.js";

// const sequelize = new Sequelize("sqlite::memory:");

export const User = sequelize.define(
  "User",
  {
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
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.ENUM(
        USER_TYPE.CUSTOMER,
        USER_TYPE.SELLER,
        USER_TYPE.ADMIN
      ),
      allowNull: false,
      defaultValue: USER_TYPE.CUSTOMER,
    },
  },
  {
    tableName: "users",
  }
);
