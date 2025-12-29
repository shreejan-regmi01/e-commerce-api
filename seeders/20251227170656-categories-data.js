"use strict";

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categories", [
      {
        name: "Electronics",
        slug: "electronics",
        isActive: true,
        parentId: null,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        name: "Computer Pheripherals",
        slug: "computer-pheripherals",
        isActive: true,
        parentId: 1,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        name: "Fashion",
        slug: "fashion",
        isActive: true,
        parentId: null,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        name: "Kids",
        slug: "kids",
        isActive: true,
        parentId: 3,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        name: "Infant Wear",
        slug: "infant-wear",
        isActive: true,
        parentId: 4,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
