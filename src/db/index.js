import { Sequelize } from "sequelize";
import config from "./config.js";

const { host, user, password, database, port } = config;
// console.log(config);
export const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: "mysql",
});
