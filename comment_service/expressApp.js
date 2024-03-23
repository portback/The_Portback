const express = require("express");
const cors = require("cors");

module.exports = async (app) => {
  app.use(express.json({ limit: "2mb" }));

  app.use(cors());
};
