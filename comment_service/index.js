const express = require("express");
const { PORT } = require("./config");
const expressApp = require("./expressApp");

const StartServer = async () => {
  const app = express();

  expressApp(app);

  app.listen(PORT, () => {
    console.log(
      `============= comment service running ======== on port ${PORT} `
    );
  });
};

StartServer();
