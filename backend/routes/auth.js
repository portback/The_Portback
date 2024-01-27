const {
  Create_User,
  loginUser,
  forgotPassword,
  resetPassword,
} = require("../controllers/user_controller");

const router = require("express").Router();

router.post("/create_user", Create_User);
router.post("/login_user", loginUser);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

module.exports = router;
