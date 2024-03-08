const {
  createPost,
  getAllPosts,
  getPostById,
} = require("../controllers/post_controller");

const router = require("express").Router();

router.post("/", createPost);
router.get("/", getAllPosts);
router.get("/:id", getPostById);

module.exports = router;
