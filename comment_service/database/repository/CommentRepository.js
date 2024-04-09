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

  async DeleteComment(_id) {
    try {
      const deleteComment = await Comment.deleteOne(_id);

      return 'Deleted comment suceessfully ';
    } catch (error) {
      throw new CustomeError
    }
  }
}

module.exports = CommentRepository;
