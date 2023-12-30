import { body, param, query } from "express-validator";
import { validatorMiddleware } from "../../lib";

export const createValidation = [
  body("websiteName")
    .notEmpty()
    .withMessage("Website name must be not empty")
    .isString()
    .withMessage("Website name must be a string"),
  body("websiteDescription")
    .notEmpty()
    .withMessage("Website description must be not empty")
    .isString()
    .withMessage("Website description must be a string"),
  body("target")
    .notEmpty()
    .withMessage("Target must be not empty")
    .isString()
    .withMessage("Target must be a string"),
  validatorMiddleware,
];

export const fineAllValidation = [
  query("page").isInt().withMessage("page must be a number").optional(),
  query("limit").isInt().withMessage("limit must be a number").optional(),
  validatorMiddleware,
];

export const fineOneValidation = [
  param("id")
    .notEmpty()
    .withMessage("Id must be not empty")
    .isMongoId()
    .withMessage("Invalid Id"),
  validatorMiddleware,
];
