const express = require("express");
const { databaseConnection } = require("./database");
const { PORT } = require("./config");

const startServer = async () => {
  const app = express();

  await databaseConnection();

  app.listen(PORT , () => {
    console.log('================================== server started ===================================')
  });
};

startServer();
