const User = require("./User");

// deals with data related operations
class UserRepository {
  async CreateUser({ email, password, name }) {
    try {
      const user = new User({
        email,
        password,
        name,
      });
    } catch (error) {}
  }

  async getUserById(id) {
    try {
    } catch (error) {}
  }

  async updateUser(id) {}

  async deleteUser(id) {
    try {
    } catch (error) {}
  }
}

module.exports =  UserRepository ;
