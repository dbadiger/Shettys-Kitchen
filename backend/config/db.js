import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://testbe121:Testbe121@cluster0.3fxys.mongodb.net/shetty-kitchen');
    console.log("DB Connected.");
  } catch (error) {
    console.error("DB connection failed:", error);
  }
};