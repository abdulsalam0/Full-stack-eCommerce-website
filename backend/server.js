const express = require("express");
const Products = require("./data/products");

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

app.listen(5000, console.log("server running on port 5000"));
