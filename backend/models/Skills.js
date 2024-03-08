const mongoose = require("mongoose");

const skillSchema = mongoose.Schema({
  skillName: {
    type: String,
    required: true,
    unique: true,
  },
  imgUrl: {
    type: String,
  },
});

module.exports = mongoose.models.Skills || mongoose.model('Skills' , skillSchema)