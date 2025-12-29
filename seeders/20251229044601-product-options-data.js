"use strict";

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("product_options", [
      // Quantum Series Wireless Headphones
      {
        productId: 1,
        name: "Color",
      },
      {
        productId: 1,
        name: "Connectivity",
      },
      {
        productId: 1,
        name: "Noise Cancellation",
      },
      {
        productId: 1,
        name: "Battery Life",
      },
      // mechanical keyboard
      {
        productId: 2,
        name: "Switch Type",
      },
      {
        productId: 2,
        name: "Backlight",
      },
      {
        productId: 2,
        name: "Layout",
      },
      //Urban Classic Denim Jacket
      { productId: 3, name: "Color" },
      { productId: 3, name: "Size" },
      { productId: 3, name: "Fit" },
      //Toy set
      { productId: 4, name: "Age Group" },
      { productId: 4, name: "Material" },
      //Baby romper
      { productId: 5, name: "Color" },
      { productId: 5, name: "Size" },
      { productId: 5, name: "Fabric" },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("product_options", null, {});
  },
};
