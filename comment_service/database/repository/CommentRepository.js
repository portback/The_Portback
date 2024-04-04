const Comment = require("../models/Comment");

class CommentRepository {
  async CreateComment(content, author) {
    try {
      const comment = await Comment.create({
        content,
        author,
        likes: [],
      });
    } catch (error) {}
  }
  async getCommentReplies(commentId) {}

  getComments(postId) {}

  async EditComment(content, author) {}

  async DeleteComment(content, author) {
    try {
    } catch (error) {}
  }
}

module.exports = CommentRepository;
