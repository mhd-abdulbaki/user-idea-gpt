// @Third Party
import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";

// @Dev
// #Routes
import { userIdeaRouter } from "./user-idea/user-idea.route";
// import { corsOptions } from "./lib";

export const appModule = express();

//#Serving Static File
appModule.use(express.static("public"));
appModule.use("/image", express.static("image"));

// Cross Origin Resource Sharing
appModule.use(cors({ origin: "*", credentials: true }));

// built-in middleware to handle urlencoded form data
appModule.use(express.urlencoded({ extended: false }));

// built-in middleware for json
appModule.use(express.json());

appModule.use(morgan("tiny"));

// routes
appModule.use("/api/v1/contents", userIdeaRouter);

appModule.all("*", (req: Request, res: Response) => {
  res.status(404).json({
    status: "fail",
    message: "Not Found :(",
  });
});
