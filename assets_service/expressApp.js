const cors = require("cors");
const assets = require("./api/assets");
const express = require("express");

module.exports = (app, channel) => {
  app.use(cors());
  app.use(express.json());
  assets(app, channel);
};
