const User = require("./User");

// deals with data related operations
class UserRepository {
  async CreateUser({ email, password, name }) {
    try {
      const user = await User.create({
        email,
        password,
        name,
      });

      if (user) {
        return user;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async followUser(userId, followingId) {
    try {
      const user = await User.findById({ userId });
      const userFollowed = await User.findById({ followingId });

      user.followers.push(followingId);
      userFollowed.following.push(userId);

      await user.save();
      await userFollowed.save();
    } catch (error) {
      console.log("=================== an error occured =========", error);
    }
  }

  async OnboardUser(userId, payload) {
    try {
      const boardUser = await this.updateUser(userId, {
        ...payload,
        onBoarded: true,
      });
      return boardUser;
    } catch (error) {
      console.log(error?.message);
    }
  }

  async getUserById(id) {
    try {
      const user = await User.findById({ id });
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async updateUser(id, payload) {
    try {
      const updateUser = await User.findOneAndUpdate({ id }, payload);
      return updateUser;
    } catch (error) {
      console.log(error);
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
