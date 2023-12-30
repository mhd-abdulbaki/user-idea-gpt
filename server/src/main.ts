import mongoose from "mongoose";
import dotenv from "dotenv";

import { appModule } from "./app.module";

process.on("uncaughtException", (err) => {
  // eslint-disable-next-line no-console
  console.log(err.name, err.message);
  // eslint-disable-next-line no-console
  console.log("UNCAUGHT EXEPTION! Shutting down...");
  process.exit(1);
});

dotenv.config();

const DB = process.env.MONGODB_URL as string;

mongoose
  .connect(DB, {
    serverSelectionTimeoutMS: 5000,
  })
  // eslint-disable-next-line no-console
  .then(() => console.log(`DB connection successfully`))
  // eslint-disable-next-line no-console
  .catch((err) => console.log(` ============ERROR============ \n${err}`));

const PORT = process.env.PORT || 3500;

const server = appModule.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`The Server is Running on Port ${PORT}`);
});

process.on("unhandledRejection", (err: { name: string; message: string }) => {
  // eslint-disable-next-line no-console
  console.log(err.name, err.message);
  // eslint-disable-next-line no-console
  console.log("UNHANDLED REJECTION! Shutting down...");
  server.close(() => {
    process.exit(1);
  });
});
