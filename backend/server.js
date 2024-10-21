import express from "express";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

console.log(port);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

console.log("Hello");

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
