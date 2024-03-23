const Comment = require("../models/Comment");

class CommentRepository {
  async CreateComment(content, author) {
    try {
      const comment = await Comment.create({
        content,
        author,
        likes: [],
      });
    } catch (error) {
        
    }
  }
}

module.exports = CommentRepository;
