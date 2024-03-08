const { createSkills } = require("../controllers/skills_controller");
const { isAuthorized } = require("../middleware/verifyToken");

const router = require("express").Router();

router.get("/");
router.post("/", isAuthorized, createSkills);

module.exports = router;
