const Project = require("../models/Project");
const { CustomError } = require("../../utils");

class ProjectRepository {
  async CreateProject(name, link, description, image, userId) {
    try {
      const newProject = await Project.create({
        name,
        link,
        description,
        image,
        userId,
      });

      return newProject;
    } catch (error) {
      throw new CustomError("Error creating new Project");
    }
  }

  async findProjectByUserId(userId) {
    try {
      const userProjects = await Project.find({
        userId,
      });

      return userProjects;
    } catch (error) {
      throw new CustomError("Couldnt fetch projects", 500);
    }
  }

  async EditProject(userId, _id, payload) {
    try {
      const editting = await Project.findOneAndUpdate(
        {
          userId,
          _id,
        },
        payload
      );
    } catch (error) {
      throw new CustomError("Error updating project", 500);
    }
  }

  async DeleteProject(_id) {
    try {
      const deleteP = await Project.deleteOne({
        _id,
      });
    } catch (error) {
      throw new CustomError("Error deleting Project ", 500);
    }
  }
}
