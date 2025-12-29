"use strict";

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("skus", [
      // Wireless headphone
      {
        productId: 1,
        skuCode: "quantum-red-anc-30h",
        price: 500,
        isActive: true,
        quantity: 10,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        productId: 1,
        skuCode: "quantum-black-anc-40h",
        price: 500,
        isActive: true,
        quantity: 10,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        productId: 1,
        skuCode: "quantum-silver-anc-30h",
        price: 470,
        isActive: true,
        quantity: 8,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        productId: 1,
        skuCode: "quantum-blue-noanc-40h",
        price: 430,
        isActive: true,
        quantity: 12,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      //mechanical keyboard
      {
        productId: 2,
        skuCode: "prokey-rgb-blue-full",
        price: 150,
        isActive: true,
        quantity: 15,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        productId: 2,
        skuCode: "prokey-rgb-red-tkl",
        price: 140,
        isActive: true,
        quantity: 10,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        productId: 2,
        skuCode: "prokey-white-brown-60",
        price: 130,
        isActive: true,
        quantity: 8,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      // urban classic denim jacket
      {
        productId: 3,
        skuCode: "denim-darkblue-m-regular",
        price: 900,
        isActive: true,
        quantity: 20,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        productId: 3,
        skuCode: "denim-black-l-slim",
        price: 950,
        isActive: true,
        quantity: 12,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        productId: 3,
        skuCode: "denim-lightblue-xl-regular",
        price: 1000,
        isActive: true,
        quantity: 7,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      // adventure explorer toy set
      {
        productId: 4,
        skuCode: "explorer-3-5-plastic",
        price: 450,
        isActive: true,
        quantity: 25,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        productId: 4,
        skuCode: "explorer-6-8-wood",
        price: 550,
        isActive: true,
        quantity: 15,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      //romper
      {
        productId: 5,
        skuCode: "romper-white-0-3-cotton",
        price: 250,
        isActive: true,
        quantity: 30,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        productId: 5,
        skuCode: "romper-pink-3-6-organic",
        price: 280,
        isActive: true,
        quantity: 20,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        productId: 5,
        skuCode: "romper-blue-6-12-cotton",
        price: 300,
        isActive: true,
        quantity: 18,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("skus", null, {});
  },
};
