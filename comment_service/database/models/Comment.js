const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = Schema({
  content: {
    type: String,
    required: true,
  },
  author: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
  },
  likes: [
    {
      authorId: {
        type: String,
        required: true,
      },
    },
  ],
  replies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

module.exports = mongoose.model("Comment", CommentSchema);
