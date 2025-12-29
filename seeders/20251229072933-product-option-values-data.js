"use strict";

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("product_option_values", [
      //Quantum Series Wireless Headphones
      // Color
      {
        optionId: 1,
        value: "Black",
      },
      {
        optionId: 1,
        value: "White",
      },
      {
        optionId: 1,
        value: "Red",
      },
      {
        optionId: 1,
        value: "Blue",
      },
      // Connectivity
      {
        optionId: 2,
        value: "Bluetooth 5.3",
      },
      {
        optionId: 2,
        value: "Bluetooth 5.0",
      },
      //Noise Cancellation
      {
        optionId: 3,
        value: "Active Noise Cancellation",
      },
      {
        optionId: 3,
        value: "No Noise Cancellation",
      },
      //Battery Life
      {
        optionId: 4,
        value: "30 Hours",
      },
      {
        optionId: 4,
        value: "40 Hours",
      },
      //Mechanical Keyboard
      //Switch Type
      {
        optionId: 5,
        value: "Blue Switch",
      },
      {
        optionId: 5,
        value: "Red Switch",
      },
      {
        optionId: 5,
        value: "Brown Switch",
      },
      //Backlight
      {
        optionId: 6,
        value: "RGB",
      },
      {
        optionId: 6,
        value: "White",
      },
      //Layout
      {
        optionId: 7,
        value: "Full Size",
      },
      {
        optionId: 7,
        value: "TKL",
      },
      {
        optionId: 7,
        value: "60%",
      },
      //Urban classic denim jacket
      {
        optionId: 8,
        value: "Dark Blue",
      },
      {
        optionId: 8,
        value: "Light Blue",
      },
      {
        optionId: 8,
        value: "Black",
      },
      {
        optionId: 9,
        value: "S",
      },
      {
        optionId: 9,
        value: "M",
      },
      {
        optionId: 9,
        value: "L",
      },
      {
        optionId: 9,
        value: "XL",
      },
      {
        optionId: 10,
        value: "Regular",
      },
      {
        optionId: 10,
        value: "Slim",
      },

      //Toy set
      //optionId 11, ["3–5 Years", "6–8 Years", "9–12 Years"]
      {
        optionId: 11,
        value: "3-5 Years",
      },
      {
        optionId: 11,
        value: "6-8 Years",
      },
      {
        optionId: 11,
        value: "9-12 Years",
      },
      //optionId 12, ["Plastic", "Wood"]
      {
        optionId: 12,
        value: "Plastic",
      },
      {
        optionId: 12,
        value: "Wood",
      },
      //Baby romper
      //optionId 13, ["White", "Pink", "Sky Blue", "Yellow"]
      {
        optionId: 13,
        value: "White",
      },
      {
        optionId: 13,
        value: "Pink",
      },
      {
        optionId: 13,
        value: "Sky Blue",
      },
      {
        optionId: 13,
        value: "Yellow",
      },
      //optionId 14, ["0–3 Months", "3–6 Months", "6–12 Months"]
      {
        optionId: 14,
        value: "0-3 Months",
      },
      {
        optionId: 14,
        value: "3-6 Months",
      },
      {
        optionId: 14,
        value: "6-12 Months",
      },
      //optionId 15, ["Cotton", "Organic Cotton"]
      {
        optionId: 15,
        value: "Cotton",
      },
      {
        optionId: 15,
        value: "Organic Cotton",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("product_option_values", null, {});
  },
};
