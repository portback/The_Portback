const User = require("../models/User");
const asynchandler = require("express-async-handler");

const verify__dev = asynchandler(async (req, res, next) => {
  const apiKey = req.header("x-api-key");

  if (!apiKey) {
    return res
      .status(400)
      .send({ data: null, error: "make sure to pass x-api-key header" });
  }

  try {
    const isValidUser = await User.findOne({ apiKey });

    if (!isValidUser) {
      return res
        .status(400)
        .send({ data: null, error: "Invalid ApiKey unAuthorized user" });
    }

    req.user = isValidUser._id;
    next();
  } catch (error) {
    res.status(500).send({ data: null, error: error.message });
  }
});
