const { ASSETS_BINDING_KEY } = require("../config");
const { PublishMessage } = require("../utils"); 
const { RPCObserver } = require("../utils/RPC.JS");

module.exports = (app, channel) => {
 
   RPCObserver(channel);

  app.post("/", (req, res, next) => {
    const data = {
      event: "CREATE_ASSET_TEST",
      data: { image: "something to talk about ...." },
    };
    PublishMessage(channel, ASSETS_BINDING_KEY, JSON.stringify(data));

    res.status(200).send({ data: "doneF" });
  });
};
