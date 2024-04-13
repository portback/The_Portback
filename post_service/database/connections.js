const mongoose = require("mongoose");
const { MONGO_URI } = require("../config");

module.exports = async function datbaseConnection() {
  try {
    const connect = await mongoose.connect(MONGO_URI, {});
    console.log(
      "=========================== database connected ========================"
    );
  } catch (error) {
    throw error;
    process.exit(1);
  }
};
