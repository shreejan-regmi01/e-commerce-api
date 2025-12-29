"use strict";
import { USER_TYPE } from "../src/types/index.js";

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    //   await queryInterface.sequelize.query(`
    //   ALTER TABLE users AUTO_INCREMENT = 1;
    // `);
    //   await queryInterface.sequelize.query(`
    //   ALTER TABLE categories AUTO_INCREMENT = 1;
    // `);
    //   await queryInterface.sequelize.query(`
    //   ALTER TABLE products AUTO_INCREMENT = 1;
    // `);
    //   await queryInterface.sequelize.query(`
    //   ALTER TABLE product_categories AUTO_INCREMENT = 1;
    // `);
    //   await queryInterface.sequelize.query(`
    //   ALTER TABLE product_options AUTO_INCREMENT = 1;
    // `);
    //   await queryInterface.sequelize.query(`
    //   ALTER TABLE product_option_values AUTO_INCREMENT = 1;
    // `);
    //   await queryInterface.sequelize.query(`
    //   ALTER TABLE skus AUTO_INCREMENT = 1;
    // `);
    //   await queryInterface.sequelize.query(`
    //   ALTER TABLE sku_option_values AUTO_INCREMENT = 1;
    // `);
    //   await queryInterface.sequelize.query(`
    //   ALTER TABLE products AUTO_INCREMENT = 1;
    // `);

    await queryInterface.bulkInsert("users", [
      {
        firstName: "Ruby",
        lastName: "Adelyn",
        email: "ruby.adelyn@email.com",
        password:
          "$2b$10$MOabz8Nky4HHUIiJf/Hty.41m3ILKlggp3PMycFSHec4OZLsNIwG.", //password
        mobile: "0412312312",
        role: USER_TYPE.CUSTOMER,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        firstName: "Liam",
        lastName: "Harrison",
        email: "liam.harrison@email.com",
        password:
          "$2b$10$MOabz8Nky4HHUIiJf/Hty.41m3ILKlggp3PMycFSHec4OZLsNIwG.", //password
        mobile: "0498765432",
        role: USER_TYPE.SELLER,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        firstName: "Sophia",
        lastName: "Miller",
        email: "sophia.miller@email.com",
        password:
          "$2b$10$MOabz8Nky4HHUIiJf/Hty.41m3ILKlggp3PMycFSHec4OZLsNIwG.", //password
        mobile: "0488123456",
        role: USER_TYPE.SELLER,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        firstName: "Noah",
        lastName: "Anderson",
        email: "noah.anderson@email.com",
        password:
          "$2b$10$MOabz8Nky4HHUIiJf/Hty.41m3ILKlggp3PMycFSHec4OZLsNIwG.", //password
        mobile: "0477345678",
        role: USER_TYPE.ADMIN,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
