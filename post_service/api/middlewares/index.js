const { ValidateToken, CustomError } = require("../../utils");

module.exports.auth = (req, res, next) => {
  try {
    const isAuthorized = ValidateToken(req);

    if (isAuthorized) {
      next();
    } else {
      throw new CustomError("Unauthorized", 403);
    }
  } catch (error) {
    throw error;
  }
};
