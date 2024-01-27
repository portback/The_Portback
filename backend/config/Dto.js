const _ = require("lodash");

const UserDTO = (value) => {
  const excludedFields = [
    "password",
    "updatedAt",
    "createdAt",
    "apiKey",
    "otpExpires",
    "otpKey",
  ];
  const updated = _.omit(value, excludedFields);
  return updated;
};

module.exports = { UserDTO };
