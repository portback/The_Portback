const express = require("express");
const { databaseConnection } = require("./database");
const { PORT } = require("./config");
const expressApp = require("./expressApp");
const { CreateChannel } = require("./utils");

const startServer = async () => {
  const app = express(); 

  await databaseConnection();

  const channel = await CreateChannel()

  await expressApp(app , channel);

  app.listen(PORT, () => {
    console.log(
      "================================== server started ==================================="
    );
  });
};

startServer();
