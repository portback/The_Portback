const mongoose = require("mongoose");

const Schema = mongoose.Schema();

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    onBoarded:{
      type:Boolean,
      default:false,
    },
    profileImg: {
      type:String,
    }
  },
  {
    toJSON: {
      transform(doc, _ret) {
        delete _ret.__v;
        delete _ret.password;
      },
    },
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
