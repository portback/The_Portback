const express = require("express");
const cors = require("cors");
const { customer } = require("./api");

module.exports = async (app) => {
  app.use(express.json({ limit: "1.4mb" }));

  customer(app);
  app.use(cors());
};
