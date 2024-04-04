const dotenv = require("dotenv");
const express = require("express");
const expressApp = require("./expressApp");
const { dbconnection } = require("./database");
dotenv.config();

const StartServer = async () => {
  const app = express();
  await dbconnection();
  await expressApp(app);

  app
    .listen("5001", () => {
      console.log("app listening at port 5001");
    })
    .on("error", (err) => {
      console.error(err);
      process.exit();
    });
};

StartServer();
