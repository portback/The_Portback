const Post = require("../models/Posts");

// Create a new post
async function createPost(req, res) {
  try {
    const { author, content, media, caption, type } = req.body;

    if (!type) {
      return res.status(400).send({ data: null, error: "type is required" });
    }
    if (type == "Status" && !content?.length) {
      return res
        .status(400)
        .send({ data: null, error: "Content is required for status" });
    }
    if ((type == "Video" && !media) || (type == "Photo" && !media)) {
      return res
        .status(400)
        .send({ data: null, error: `Media is required for ${type}` });
    }

    const post = new Post({ author, content, media, caption, type });
    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Get all posts
async function getAllPosts(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const count = await Post.countDocuments();
    const totalPages = Math.ceil(count / limit);

    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate("author")
      // .populate("comments")
      .skip(skip)
      .limit(limit)
      .exec();

    res.json({
      totalPages,
      currentPage: page,
      posts,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get a single post by ID
async function getPostById(req, res) {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId)
      .populate("author")
      .populate("comments")
      .exec();
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Update a post by ID
async function updatePost(req, res) {
  try {
    const { postId } = req.params;
    const { content, media, caption } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { content, media, caption },
      { new: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Delete a post by ID
async function deletePost(req, res) {
  try {
    const { postId } = req.params;
    const deletedPost = await Post.findByIdAndDelete(postId);
    if (!deletedPost) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(deletedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};
