const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectDb } = require("./config/db");

dotenv.config();
const port = process.env.PORT | 5000;

connectDb();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/skills", require("./routes/skills"));
app.use("/api/v1/post", require("./routes/post"));

app.get("/", (req, res) => {
  res.send("Welcome to portback api");
});

app.listen(port, "0.0.0.0", () => {
  console.log("app is running on port " + port);
});
