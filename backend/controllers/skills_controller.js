const Skills = require("../models/Skills");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");

const getSkills = asyncHandler(async (req, res) => {});

const getSkillsByUser = asyncHandler(async (req, res) => {
  // get skills associated with specific user
});

const createSkills = asyncHandler(async (req, res) => {
  // check if skill name exist
  const { skillName, imgUrl } = req.body;

  if (!skillName || !imgUrl) {
    return res.status(400).send({
      data: null,
      error: "Invalid request skillName and imgUrl are required fields",
    });
  }

  try {
    const skillExist = await Skills.findOne({ skillName });
    const user = await User.findById(req.user);

    // if skill name exist then push skill to user
    if (skillExist) {
      console.log("i hit this function skills", skillExist);
      // check if user already has skill
      const userHasSkill =
        user && user.skills.some((item) => item.equals(skillExist._id));

      //if user has skill return success
      if (userHasSkill) {
        return res.status(200).send({
          data: "skill added",
          error: null,
        });
      }

      user.skills.unshift(skillExist._id);
      await user.save();
      return res.status(200).send({ data: "skill created", error: null });
    }
    //else create new skill and push to user
    else {
      try {
        const newSkill = await Skills.create({
          skillName,
          imgUrl,
        });

        if (newSkill) {
          user.skills.push(newSkill._id);
          await user.save();
          return res
            .status(201)
            .send({ data: "new skill created", error: null });
        } else {
          return res.status(500).send({ error: "Failed to create new skill" });
        }
      } catch (error) {
        return res.status(500).send({ error: error.message });
      }
    }
  } catch (error) {
    res.status(500).send({ data: null, error: error.message });
  }
});

//
const updateSkills = asyncHandler(async (req, res) => {
  // get the pos of skill user wishes to update
  // if skill user wishes to update to exist
});

const deleteSkilll = asyncHandler(async (req, res) => {
  // remove skills from user
});

module.exports = { createSkills };
