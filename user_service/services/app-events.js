const UserService = require("./UserService");

module.exports = (app) => {
  const userService = new UserService();

  app.use("/app-events", async (req, res, next) => {
    const { payload } = req.body;

    console.log("============ User Service Recorded Event ===========");

    userService.subscribeEvents(payload);

    return res.status(200).json(payload);
  });
};
