import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const dbconnect = async () => {
  mongoose
    .connect(process.env.DATABASE_URL || "")
    .then(() => {
      console.log("db connected successfully");
    })
    .catch((err) => {
      console.log(err);
      console.log("failed to connect with db");
    });
};
export default dbconnect;
