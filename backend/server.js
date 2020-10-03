import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";

//importing middleware
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// Setting env file
dotenv.config();

// Connecting to the DB
connectDB();

// Creating express application
const app = express();

app.get("/", (req, res) => {
  res.send("api is running");
});

app.use("/api/products", productRoutes);

// handles all false URLs
app.use(notFound);

//  catch all err request and responses with error and stack message
app.use(errorHandler);

const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server running in ${NODE_ENV} mode on port ${PORT}`.bgYellow.black.bold
      .underline
  )
);
