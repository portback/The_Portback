const jwt = require("jsonwebtoken");
const handler = require("express-async-handler");
const User = require("../models/User");

const isAuthorized = handler(async (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token?.length) {
    return res
      .status(400)
      .send({ data: null, erorr: "x-auth-token is required" });
  }
  try {
    const isToken = jwt.verify(token, "password");

    if (!isToken) {
      return res.status(401).send({ data: null, error: "Unauthorized" });
    }

    const user = await User.findById(isToken.id);

    if (!user) {
      res.status(401).send({ data: null, error: "User not Found" });
    }
    req.user = user._id;
    req.token = token;
    next();
  } catch (error) {
    res.status(500).send({ data: null, error: error.message });
  }
});

module.exports = { isAuthorized };