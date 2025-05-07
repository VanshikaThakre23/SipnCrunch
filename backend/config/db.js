// import mongoose from "mongoose";

// export const connectDB = async ()=>{
//   await mongoose.connect('mongodb+srv://VanshikaThakre:Vanshu_mongo_123@clusterone.5884z9x.mongodb.net/SipandCrunch').then(()=>console.log("DB Connection done"));
// }

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://VanshikaThakre:Vanshu_mongo_123@clusterone.5884z9x.mongodb.net/SipandCrunch', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully.");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // Optional: Exit if DB fails
  }
};
