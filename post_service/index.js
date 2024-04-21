const express = require("express");
const { PORT } = require("./config");
const expressApp = require("./expressApp");
const { CreateChannel } = require("./utils");
const datbaseConnection = require("./database/connections");

const startServer = async () => {
  const app = express();

  // await datbaseConnection();
  const channel = await CreateChannel();

  await expressApp(app , channel);

  app.listen(PORT, () => {
    console.log(
      "================================== server started ==================================="
    );
  });
};

startServer();
