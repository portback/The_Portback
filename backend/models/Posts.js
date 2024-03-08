const mongoose = require("mongoose");

// Define schema for post
const postSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: { type: String },
    media: { type: String },
    caption: { type: String },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    type: { type: String, enum: ["Status", "Photo", "Video"], required:true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Create Post model
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
