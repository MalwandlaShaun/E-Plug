import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import courseContentRoutes from "./Routes/courseContentRoutes.js";
import cors from "cors";
const app = express();

import bodyParser from "body-parser";

app.use(cors);
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

// Routes

app.use("/api/course", courseContentRoutes);

const connection = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect("mongodb://localhost:27017/", {
      useNewUrlParser: true,
    });
  } catch (error) {
    console.log(error);
    throw new AppError("Database connection error", 500);
  }
};

app.listen(process.env.PORT || 8000, () => {
  connection();
  console.log("Server connected");
});
