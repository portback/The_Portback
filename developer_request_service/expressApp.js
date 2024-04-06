const express = require("express");
const cors = require("cors");
const { HandleError } = require("./utils");

module.exports = async (app) => {
  app.use(express.json());
  app.use(cors());

  app.use(HandleError);
};
