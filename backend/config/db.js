
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('.env path of mongo', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully.");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // Optional: Exit if DB fails
  }
};
