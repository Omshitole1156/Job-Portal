// import { mongo } from 'mongoose'
import mongoose from "mongoose";

export const connectDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
   console.log("Database successfully connected");
   
  } catch (error) {
    console.error("Database Connection Error:", error.message);
    res.status(500).json({ success: false, message: "Database connection failed" });
  }
};

export default connectDB;
