const yup = require("yup");

const userSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

module.exports.validateUserSchema = async (user) => {
  try {
    await userSchema.validate(user);
  } catch (error) {
    return error.errors[0];
  }
};

module.exports.cleanPayload = (user) => {
  delete user.password;
  delete user.apikey;
  delete user.otpKey;
  delete user.updatedAt;
  delete user.followers;
  delete user.following;
  delete user.playerName;
  delete user.bio;
  delete user.apiKey;
  delete user.role;
  delete user.location;

  return user;
};
