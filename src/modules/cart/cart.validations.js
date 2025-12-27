import { body } from "express-validator";

export const addCartItemValidator = [
  body("skuId").isInt().withMessage("Invalid skuId"),
  body("quantity").isInt().withMessage("Invalid quantity"),
];

export const updateCartItemValidator = [
  body("quantity").isInt().withMessage("Invalid quantity"),
];
