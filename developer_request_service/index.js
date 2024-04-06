const  expressApp  = require("./expressApp");
const express = require("express");
const { PORT } = require("./config");

const startServer = async () => {
  const app = express();

  await expressApp(app);
  app.listen(PORT, () => {
    console.log("developer servie running on port " + PORT);
  });
};

startServer();
