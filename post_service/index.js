const express = require("express");
const { databaseConnection } = require("./database");
const { PORT } = require("./config");
const expressApp = require("./expressApp");

const startServer = async () => {
  const app = express();

  await databaseConnection();
  await expressApp(app);

  app.listen(PORT, () => {
    console.log(
      "================================== server started ==================================="
    );
  });
};

startServer();
