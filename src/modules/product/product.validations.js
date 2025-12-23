import { body } from "express-validator";

export const createProductValidator = [
  body("name").trim().notEmpty().withMessage("Product name is required"),
  body("slug").trim().notEmpty().withMessage("Slug is required"),
  body("description").trim().notEmpty().withMessage("Description is required"),
  body("brand").optional().trim(),
  body("isActive").isBoolean().withMessage("Active status is required"),
  body("addedBy").isInt().withMessage("User id is required"),
  body("categoryId").isInt().withMessage("Category id is required"),
  body("productOptions")
    .optional()
    .isArray({ min: 1 })
    .withMessage("ProductOptions must be a non-empty array"),

  body("productOptions.*.name")
    .trim()
    .notEmpty()
    .withMessage("Each product option must have a name"),

  body("productOptions.*.values")
    .isArray({ min: 1 })
    .withMessage("Each product option must have at least one value"),

  body("productOptions.*.values.*")
    .trim()
    .notEmpty()
    .withMessage("Option values must be non-empty strings"),
];
