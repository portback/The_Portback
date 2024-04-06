const Skills = require("../models/Skills");
const { CustomError } = require("../../utils");

class SkillsRepository {
  async CreateSkill(name, imgUrl, descriptions) {
    try {
      const newSkill = await Skills.create({
        name,
        descriptions,
        imgUrl,
      });

      return newSkill
    } catch (error) {
      throw new CustomError("Error creating new Skill", 400);
    }
  }





}
