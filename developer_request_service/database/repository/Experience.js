const Experience = require("../models/Experiences");

class ExperienceRespository {
  async CreateExperience(
    userId,
    companyName,
    jobTitle,
    description,
    startDate,
    endDate,
    location
  ) {
    try {
      const newExperience = await Experience.create({
        userId,
        companyName,
        jobTitle,
        description,
        startDate,
        endDate,
        location,
      });

      if (newExperience) {
        return newExperience;
      }
    } catch (error) {
      throw new CustomError("Error creating experience", 400);
    }
  }

  async findExperienceByUserId(userId) {
    try {
      const Experiences = await Experience.find({
        userId,
      }).limit(5);

      return Experiences;
    } catch (error) {
      throw new CustomError("eroor fetching experiences", 500);
    }
  }

  async editExperiences(userId, _id, payload) {
    try {
      const editting = await Experience.findOneAndUpdate(
        {
          userId,
          _id,
        },
        payload
      );
    } catch (error) {
        throw error
    }
  }

  async deleteExperienceByUserId(userId, _id) {
    try {
      const editting = await Experience.deleteOne({
        userId,
        _id,
      });
      return "Deleted Experience Sucessfully ";
    } catch (error) {
      throw new CustomError("Error Deleting Experience ", 500);
    }
  }
}
