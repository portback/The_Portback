module.exports = (app) => {
  app.get("/:id", (req, res, next) => {});
  app.get("/", (req, res, next) => {
    res.json({ message: "wassup" });
  });

  app.post("/create-account", (req, res, next) => {});

  app.post("/login", (req, res, next) => {});

  app.patch("/login", (req, res, next) => {});

  app.delete("/delete/:id", (req, res, next) => {});
};
