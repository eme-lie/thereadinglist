import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import mainRouter from "./router/mainRouter.js";
dotenv.config();

connectDB();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

console.log(port);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/reading-list", mainRouter);

console.log("Hello");

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
