import { Router } from "express";
import { createOne, findAll, findOne } from "./user-idea.controller";
import {
  createValidation,
  fineAllValidation,
  fineOneValidation,
} from "./validation/user-idea.validation";

export const userIdeaRouter = Router();

userIdeaRouter
  .route("/")
  .post(createValidation, createOne)
  .get(fineAllValidation, findAll);
userIdeaRouter.route("/:id").get(fineOneValidation, findOne);
