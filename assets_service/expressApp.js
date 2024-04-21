const cors = require("cors");
const assets = require("./api/assets");
const express = require("express");
const { HandleError } = require("./utils");

module.exports = async (app, channel) => {
  app.use(cors());
  app.use(express.json());
  assets(app, channel);

  app.use(HandleError);
};
