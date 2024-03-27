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
    onBoarded: {
      type: Boolean,
      default: false,
    },
    profileImg: {
      type: String,
    },
    role: {
      type: String,
    },
    location: {
      type: String,
    },
    bio: {
      type: String,
      default: "",
    },
    followers: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
    },
    following: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
    },
    apiKey: {
      type: String,
      default: "",
    },
    otpKey: {
      type: String,
      default: null,
    },
    otpExpires: {
      type: Date,
    },
  },
  {
    toJSON: {
      transform(doc, _ret) {
        delete _ret.__v;
        delete _ret.password;
        delete _ret.otpKey;
        delete _ret.otpExpires;
      },
    },
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
