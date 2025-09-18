const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/mern_admin";

const URI=process.env.MONGODB_URI;
const connectDb = async () => {
  try {
    await mongoose.connect(URI); 
    console.log(" Connection successful to MongoDB");
  } catch (error) {
    console.error("Database connection failed", error.message);
    process.exit(1);
  }
};

module.exports = connectDb;
