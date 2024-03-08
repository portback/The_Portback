const {
  Create_User,
  loginUser,
  forgotPassword,
  resetPassword,
  getMe,
  getUserbyId,
} = require("../controllers/user_controller");
const { isAuthorized } = require("../middleware/verifyToken");

const router = require("express").Router();

router.post("/create_user", Create_User);
router.post("/login_user", loginUser);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.get("/me", isAuthorized, getMe);
router.get("/:id", isAuthorized, getUserbyId);

module.exports = router;
