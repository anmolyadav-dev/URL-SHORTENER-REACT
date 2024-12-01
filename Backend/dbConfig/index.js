import mongoose from "mongoose";
import "dotenv/config";
export async function connect() {
  try {
    await mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log("MONGODB CONNECTED SUCCESSFULLY"))
      .catch((err) => console.log("mongodb connection error", err));
  } catch (error) {
    console.log("Unable to connect to MongoDB");
  }
}
