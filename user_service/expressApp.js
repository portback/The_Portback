const express = require("express");
const cors = require("cors");
const { user } = require("./api");
const { HandleError } = require("./utils");

module.exports = async (app) => {
  app.use(express.json({ limit: "1.4mb" }));

  app.use(cors());

  user(app);

  app.use(HandleError);
};
