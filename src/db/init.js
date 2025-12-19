import sequelize from "./index.js";

export async function initDB() {
  try {
    await sequelize.authenticate();
    console.log("DB connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
}
