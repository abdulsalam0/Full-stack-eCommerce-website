import express from "express";
import dotenv from "dotenv";
import Products from "./data/products.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("api is running");
});

app.get("/api/products", (req, res) => {
  res.json(Products);
});

app.get("/api/product/:id", (req, res) => {
  const product = Products.find((product) => product._id === req.params.id);
  res.json(product);
});

const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`server running in ${NODE_ENV} mode on port ${PORT}`)
);
