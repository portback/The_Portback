const { PostService } = require("../services");

module.exports = (app) => {
  const postService = new PostService();

  app.post("/events", (req, res, next) => {
    const { payload } = req.body;

    postService.SubscribeEvents(payload);

    console.log("===================== app recieved event ============= ");
    res.json(payload);
  });
};
