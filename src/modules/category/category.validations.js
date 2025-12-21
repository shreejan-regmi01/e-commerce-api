import { body } from "express-validator";

export const createCategoryValidator = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("slug").trim().notEmpty().withMessage("Slug is required"),
  body("parentId")
    .optional()
    .isInt()
    .withMessage("Parent ID must be an integer"),
];
