const express = require("express");
const proxy = require("express-http-proxy");

const cors = require("cors");

const app = express();

app.use(express.json());

app.use("/api/v1/auth", proxy("http://localhost:5001"));
app.use("/api/v1/posts", proxy("http://localhost:5002"));
app.use("/api/v1/developer_api", proxy("http://localhost:5003"));
app.use("/api/v1/message_service", proxy("http://localhost:5004"));
app.use("/api/v1/comment_service", proxy("http://localhost:5005"));

app.listen("5000", () => {
  console.log("Gateway is listening to 5000");
});
