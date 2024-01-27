const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("connected succesfully");
  } catch (error) {
    console.log("error", error.message);
  }
}; 
 
module.exports = { connectDb };
  