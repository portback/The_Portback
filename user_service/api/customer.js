const { VerifyToken } = require("./middlewares");

module.exports = (app) => {
  app.get("/:id", (req, res, next) => {});
  app.get("/", (req, res, next) => {
    res.json({ message: "wassup" });
  });

  app.get("/followers", VerifyToken, (req, res, next) => {});
  app.get("/following", (req, res, next) => {});

  app.post("/create-account", (req, res, next) => {});

  app.post("/onbooarding", (req, res, next) => {});

  app.post("/follow/:id", VerifyToken, (req, res, next) => {});

  app.post("/login", (req, res, next) => {});

  app.patch("/login", (req, res, next) => {});

  app.delete("/delete/:id", (req, res, next) => {});
};
