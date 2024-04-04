const mongoose = require("mongoose");
const { defaultAvatar } = require("../../constants");

const Schema = mongoose.Schema;

const userSchema = Schema(
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
    avatar: {
      type: String,
      default: defaultAvatar,
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
    playerName: {
      type: String,
    },
  },
  {
    toJSON: {
      transform(doc, _ret) {
        delete _ret.__v;
        delete _ret.password;
        delete _ret.otpKey;
        delete _ret.otpExpires;
        delete _ret.followers;
        delete _ret.following;
      },
    },
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
