import mongoose from "mongoose";
import dotenv from "dotenv";

// importing data
import users from "./data/users.js";
import products from "./data/products.js";

// get the mongoDB models
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";

// DB connection
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // getting admin id from mongoDB
    const usersData = await User.insertMany(users);
    const adminUser = usersData[0]._id;

    // mapping admin user id to products
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log("Data Imported.".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    console.log("hello");
    process.exit(1);
  }
};

const destroytData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data destroyed.".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroytData();
} else {
  importData();
}
