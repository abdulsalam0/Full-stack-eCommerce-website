import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(
      `MongoDB connection: ${conn.connection.host}`.bgGreen.black.underline
    );
  } catch (e) {
    console.error(`Error: ${e.message}`.bgRed.black.bold);
    process.exit(1);
  }
};

export default connectDB;
