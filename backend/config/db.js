import dotenv from "dotenv";
dotenv.config(); // Ensure this line is at the top!

import mongoose from "mongoose";

const mongoURI = process.env.MONGODB_URI; // This should correctly access the environment variable

export const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      tls: true,                        // Ensure TLS is enabled
      tlsAllowInvalidCertificates: false // Avoid issues with self-signed certs
    });
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1); // Exit the app if connection fails
  }
};
   