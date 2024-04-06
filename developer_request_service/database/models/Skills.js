const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SkillsSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  imgUrl: {
    type: String,
  },
  descriptions: {
    type: String,
  },
});

module.exports = mongoose.model("Skills", SkillsSchema);
