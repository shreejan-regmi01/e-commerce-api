"use strict";

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categories", [
      {
        id: 1,
        name: "Electronics",
        slug: "electronics",
        isActive: true,
        parentId: null,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        id: 2,
        name: "Computer Pheripherals",
        slug: "computer-pheripherals",
        isActive: true,
        parentId: 1,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        id: 3,
        name: "Fashion",
        slug: "fashion",
        isActive: true,
        parentId: null,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        id: 4,
        name: "Kids",
        slug: "kids",
        isActive: true,
        parentId: 3,
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        id: 5,
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
