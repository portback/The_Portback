const { POST_RPC_QUEUE } = require("../config");
const { AssetService } = require("../services");
const { SubcribeMessage } = require("../utils");
const { RPCRequest } = require("../utils/RPC.JS");
const { RPCObserver } = require("../utils/RPC.JS");
const { uploader, cloudinary } = require("../utils/cloudinary");

module.exports = (app, channel) => {
  const assetservice = new AssetService();

  SubcribeMessage(channel, assetservice);

  RPCObserver(channel);

  app.post("/image", async (req, res, next) => {
    try {
      const { image, userId } = req.body;

      const response = await assetservice.createAssets(image, "Image", userId);

      res.status(201).send({ data: response, error: null });
    } catch (error) {
      next(error);
    }
  });

  app.post("/video", async (req, res, next) => {
    const { userId } = req.body;
    try {
      if (!req.headers["content-type"].startsWith("multipart/form-data")) {
        return res.status(400).json({ error: "Invalid content type" });
      }
      const upload = await assetservice.createVideoAsset(req, userId);
      console.log(upload);
      res.status(200).send({ data: upload, error: null });
    } catch (err) {
      next(err);
    }
  });

  app.post("/something", async (req, res) => {
    const payload = {
      data: "urldidnani3je93euddoododod",
      error: null,
    };
    try {
      const response = await RPCRequest(
        POST_RPC_QUEUE,
        channel,
        JSON.stringify(payload)
      );
      res.send({
        done: "done",
        response: response,
      });
    } catch (error) {
      res.status(400).send({ error: error });
    }
  });
};
