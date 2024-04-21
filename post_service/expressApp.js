const cors = require("cors");
const express = require("express");
const { post } = require("./api");


module.exports = async (app , channel) => {
  app.use(cors());
  app.use(express.json()); 
  post(app , channel);
};
