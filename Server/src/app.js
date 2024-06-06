import express from "express";
import cors from "cors" ;

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

//routes imports
import userRouter from "./Routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);

export default app;
