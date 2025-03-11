// import { mongo } from 'mongoose'
import mongoose from "mongoose";

export const connectDB = async (req, res) => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database successfully connected to:", conn.connection.db.databaseName); 
  } catch (error) {
    console.error("Database Connection Error:", error.message);
    res.json({ success: false, message: "Database connection failed" });
  }
};

export default connectDB;
