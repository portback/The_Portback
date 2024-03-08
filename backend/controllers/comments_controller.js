const Comment = require('../models/comment');

// Create a new comment
exports.createComment = async (req, res) => {
  try {
    const { author, text , postId } = req.body;



    const comment = new Comment({ author, text });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new reply to a comment
exports.createReply = async (req, res) => {
  try {
    const { commentId } = req.params;
    const { author, text } = req.body;
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    comment.replies.push({ author, text });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    console.error('Error creating reply:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all comments with replies
exports.getCommentsByIdWithReplies = async (req, res) => {
  try {
    const comments = await Comment.find().populate('author replies.author', 'name'); //  'name' field
    res.json(comments);
  } catch (error) {
    console.error('Error getting comments :', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a comment
exports.updateComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const { text } = req.body;
    const comment = await Comment.findByIdAndUpdate(commentId, { text }, { new: true });
    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    res.json(comment);
  } catch (error) {
    console.error('Error updating comment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a comment
exports.deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const comment = await Comment.findByIdAndDelete(commentId);
    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    console.error('Error deleting comment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
