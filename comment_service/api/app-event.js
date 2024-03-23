const CommentService = require("../service/CommentService");

module.exports = (app) => {
  const commentService = new CommentService();
  app.use("/app-events", (req, res, next) => {
    const { payload } = req.body;
    commentService.SubscribeEvents(payload);

    res.status(200).json(payload);
  });
};
