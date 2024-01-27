const mongoose = require("mongoose");

const skillSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  imgUrl: {
    type: String,
  },
});

module.exports = mongoose.model('Skills' , skillSchema)