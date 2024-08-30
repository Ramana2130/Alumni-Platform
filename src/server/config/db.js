import mongoose from "mongoose";

const mongoDb = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URL)
      .then(() => console.log("Database connected Successfully ✅"));
  } catch (error) {
    console.log("Database not connected ❌ ", error);
  }
};

export default mongoDb;
