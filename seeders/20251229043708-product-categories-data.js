"use strict";

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("product_categories", [
      //wireless headphone -> electronics, computer peripherals
      {
        productId: 1,
        categoryId: 1,
      },
      {
        productId: 1,
        categoryId: 2,
      },
      //mechanical keyboard -> electronics ,computer peripherals
      {
        productId: 2,
        categoryId: 1,
      },
      {
        productId: 2,
        categoryId: 2,
      },
      //denim jacket -> fashion
      {
        productId: 3,
        categoryId: 3,
      },
      //adventure explorer -> kids
      {
        productId: 4,
        categoryId: 4,
      },
      //softcotton -> fashion, infant wear
      {
        productId: 5,
        categoryId: 3,
      },
      {
        productId: 5,
        categoryId: 5,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("product_categories", null, {});
  },
};
