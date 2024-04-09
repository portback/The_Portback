const yup = require("yup");

const loginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

module.exports.validateLoginSchema = async (user) => {
  try {
    await loginSchema.validate(user);
  } catch (error) {
    return error.errors[0];
  }
};

const onBoardingSchema = yup.object({
  bio: yup.string().required(),
  location: yup.string().required(),
  role: yup.string().required(),
  playerName: yup.string().required(),
  avatar: yup.string(),
});

module.exports.validateOnBoardingSchema = async (schema) => {
  try {
    await onBoardingSchema.validate(schema);
  } catch (error) {
    return error.errors[0];
  }
};

const resetPassSchema = yup.object({
  otp: yup.string().length(6).required("otp is required"),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

module.exports.validateResetSchema = async (schema) => {
  try {
    await resetPassSchema.validate(schema);
  } catch (error) {
    return error.errors[0];
  }
};
