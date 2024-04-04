const mongosse = require("mongoose");

const Schema = new mongosse.Schema();

const postSchema = Schema({
  author: {
    name: { type: String },
    avatar: { type: String },
    _id: { type: String },
  },
  content: { type: String },
  media: { type: String },
  caption: { type: String },
  likes: [],
  comments: [],
  type: { type: String, enum: ["Status", "Photo", "Video"], required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongosse.model("Post", postSchema);
