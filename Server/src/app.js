import express from "express";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

const app = express();

//routes imports
import userRouter from "./Routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);

export default app;
