const { default: mongoose } = require("mongoose");
const { MONGO_URI } = require("../config");

const Connections = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("connected to user db");
  } catch (error) {
    console.log("Error ============");
    console.log(error);
    process.exit(1);
  }
};

module.exports = Connections;
