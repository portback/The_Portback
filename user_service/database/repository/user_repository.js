const { CustomeError } = require("../../utils");
const User = require("../models/User");

// deals with data related operations
class UserRepository {
  async CreateUser(email, password, name) {
    try {
      const isUser = await this.getUserByEmail(email);
      if (isUser) {
        throw new CustomeError("User with email already exist ", 400);
      } else {
        const user = await User.create({
          email,
          password,
          name,
        });

        if (user) {
          return user;
        }
      }
    } catch (error) {
      throw error;
    }
  }

  async followUser(userId, followingId) {
    try {
      const user = await User.findById(userId);
      const userFollowed = await User.findById(followingId);

      if (!userFollowed) {
        throw new CustomeError("User does not exist", 404);
      }

      if (userId === followingId) {
        throw new CustomeError("Cant follow Yourself", 400);
      }

      if (user.following.findIndex((item) => item == followingId) != -1) {
        throw new CustomeError("Already Following User", 400);
      }

      user.following.unshift(followingId);
      userFollowed.followers.unshift(userId);

      await user.save();
      await userFollowed.save();

      return `Followed user ${userFollowed.name} successfully`;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async UnfollowUser(userId, followingId) {
    try {
      const user = await User.findById(userId);
      const userFollowed = await User.findById(followingId);

      if (!userFollowed) {
        throw new CustomeError("User does not exist", 404);
      }

      if (userId === followingId) {
        throw new CustomeError("Cant unfollow Yourself", 400);
      }

      if (user.following.findIndex((item) => item == followingId) === -1) {
        throw new CustomeError("Not Following User", 400);
      }

      user.following.splice(
        user.following.findIndex((item) => item == followingId),
        1
      );
      userFollowed.followers.splice(
        userFollowed.followers.findIndex((item) => item == userId),
        1
      );

      await user.save();
      await userFollowed.save();

      return `Unfollowed user ${userFollowed.name} successfully`;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getUserById(id) {
    try {
      const user = await User.findById(id);
      return user;
    } catch (error) {
      throw new CustomeError(
        `================= Query Failed ==============`,
        400
      );
    }
  }

  async getUserByEmail(email) {
    try {
      const user = await User.findOne({ email }).lean();

      if (user && user._id) {
        user._id = user._id.toString();
      }

      return user;
    } catch (error) {
      throw new CustomeError(
        `================= Query Failed ==============`,
        400
      );
    }
  }

  async getUserData(fields, _id, populate, page = 1, req) {
    console.log(req.originalUrl);

    try {
      const data = await User.findById(_id, fields)
        .populate({
          path: populate,
          select: fields,
        })
        .lean();
      return {
        data,
      };
    } catch (error) {
      throw new CustomeError(
        `================ Query Failed ============: ${error.message}`,
        400
      );
    }
  }

  async updateUser(_id, payload) {
    try {
      const updated = await User.findOneAndUpdate({ _id }, payload);
      return updated;
    } catch (error) {
      throw new CustomeError(
        `==================== Error updating user ===================== ${error}`,
        500
      );
    }
  }

  async deleteUser(id) {
    try {
      const deleteUser = await User.deleteOne({ id });
      return deleteUser;
    } catch (error) {
      console.log(
        "============== unable to delete user ============== \n",
        error
      );
    }
  }
}

module.exports = UserRepository;
