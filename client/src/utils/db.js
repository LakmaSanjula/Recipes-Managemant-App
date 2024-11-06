import mongoose from "mongoose";

// Set strictQuery option to true to suppress the warning
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Connection failed!", error);
    throw new Error("Connection failed!");
  }
};


export default connect;
