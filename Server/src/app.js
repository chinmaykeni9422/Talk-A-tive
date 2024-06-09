import express from "express";
import cors from "cors" ;

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

// to accept the json file
app.use(express.json())

// to decode the encoded value in url
app.use(express.urlencoded()) ;

// to store file temporarely in local environment
app.use(express.static("public")) ;

//routes imports
import userRouter from "./Routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);

export default app;
