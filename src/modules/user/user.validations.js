import { body } from "express-validator";
import { USER_TYPE } from "../../types/index.js";

export const createUserValidator = [
  body("firstName").trim().notEmpty().withMessage("Firstname is required"),
  body("lastName").trim().notEmpty().withMessage("Lastname is required"),
  body("email").isEmail().withMessage("Invalid email address").normalizeEmail(),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  body("mobile")
    .isLength({ min: 10, max: 10 })
    .withMessage("Mobile number must be 10 characters long"),
  body("role")
    .optional()
    .isIn([USER_TYPE.CUSTOMER, USER_TYPE.SELLER, USER_TYPE.ADMIN])
    .withMessage("Invalid role"),
];

export const signInValidator = [
  body("email").isEmail().withMessage("Invalid email address").normalizeEmail(),
  body("password").trim().notEmpty(),
];
