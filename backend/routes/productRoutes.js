import express from "express";
import Product from "../models/productModel.js";

// async handler to stop using try and catch
import asyncHandler from "express-async-handler";

const router = express.Router();

// @desc    Fetch all products
// @route   GET /api/products
// @access  public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
  })
);

// @desc    Fetch product by ID
// @route   GET /api/products/:id
// @access  public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      // we can throw error and will be handled by our custom error handler
      throw new Error("Product not found");
    }
  })
);

export default router;
