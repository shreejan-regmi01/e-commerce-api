"use strict";

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("sku_option_values", [
      //wireless headphone
      {
        skuId: 1,
        optionValueId: 3,
      },
      {
        skuId: 1,
        optionValueId: 5,
      },
      {
        skuId: 1,
        optionValueId: 7,
      },
      {
        skuId: 1,
        optionValueId: 9,
      },
      {
        skuId: 2,
        optionValueId: 1,
      },
      {
        skuId: 2,
        optionValueId: 7,
      },
      {
        skuId: 2,
        optionValueId: 5,
      },
      {
        skuId: 2,
        optionValueId: 10,
      },
      {
        skuId: 3,
        optionValueId: 2,
      },
      {
        skuId: 3,
        optionValueId: 7,
      },
      {
        skuId: 3,
        optionValueId: 6,
      },
      {
        skuId: 3,
        optionValueId: 9,
      },
      {
        skuId: 4,
        optionValueId: 4,
      },
      {
        skuId: 4,
        optionValueId: 6,
      },
      {
        skuId: 4,
        optionValueId: 8,
      },
      {
        skuId: 4,
        optionValueId: 10,
      },
      {
        skuId: 5,
        optionValueId: 14,
      },
      {
        skuId: 5,
        optionValueId: 11,
      },
      {
        skuId: 5,
        optionValueId: 17,
      },
      {
        skuId: 6,
        optionValueId: 14,
      },
      {
        skuId: 6,
        optionValueId: 12,
      },
      {
        skuId: 6,
        optionValueId: 17,
      },
      {
        skuId: 7,
        optionValueId: 15,
      },
      {
        skuId: 7,
        optionValueId: 13,
      },
      {
        skuId: 7,
        optionValueId: 18,
      },
      {
        skuId: 8,
        optionValueId: 19,
      },
      {
        skuId: 8,
        optionValueId: 23,
      },
      {
        skuId: 8,
        optionValueId: 26,
      },
      {
        skuId: 9,
        optionValueId: 21,
      },
      {
        skuId: 9,
        optionValueId: 24,
      },
      {
        skuId: 9,
        optionValueId: 27,
      },
      {
        skuId: 10,
        optionValueId: 20,
      },
      {
        skuId: 10,
        optionValueId: 25,
      },
      {
        skuId: 10,
        optionValueId: 26,
      },
      {
        skuId: 11,
        optionValueId: 28,
      },
      {
        skuId: 11,
        optionValueId: 31,
      },
      {
        skuId: 12,
        optionValueId: 29,
      },
      {
        skuId: 12,
        optionValueId: 32,
      },
      {
        skuId: 13,
        optionValueId: 33,
      },
      {
        skuId: 13,
        optionValueId: 37,
      },
      {
        skuId: 13,
        optionValueId: 40,
      },
      {
        skuId: 14,
        optionValueId: 34,
      },
      {
        skuId: 14,
        optionValueId: 38,
      },
      {
        skuId: 14,
        optionValueId: 41,
      },
      {
        skuId: 15,
        optionValueId: 35,
      },
      {
        skuId: 15,
        optionValueId: 39,
      },
      {
        skuId: 15,
        optionValueId: 40,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("sku_option_values", null, {});
  },
};
