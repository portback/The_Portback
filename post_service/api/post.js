const { ASSETS_BINDING_KEY } = require("../config");
const { PublishMessage } = require("../utils");

module.exports = (app, channel) => {
  app.post("/", (req, res, next) => {
    const data = {
      event: "CREATE_ASSET_TEST",
      data: { image: "something to talk about ...." },
    };
    PublishMessage(channel, ASSETS_BINDING_KEY, data);
  });
};
