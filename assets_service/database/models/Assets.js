const mongoose = require("mongoose");

const assetSchema = mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    mediaType: {
      type: String,
      enum: ["Video", "Image"],
      default: "Image",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Assets", assetSchema);
