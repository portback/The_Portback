const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    skills: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
      ref: "Skills",
    },
    apiKey:{
      type:String,
      default:'',
    },
    otpKey:{
      type:String,
      default:null,
    },
    otpExpires:{
      type:Date,

    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userModel);
