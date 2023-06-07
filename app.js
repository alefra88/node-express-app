const express = require("express");
const app = express();
const logger = require("./logger.js");
const authorize = require("./authorize.js");
//midleware
app.use([logger, authorize]);
app.get("/", (req, res) => {
  res.send("HOME HARDCODED");
});

app.get("/about", (req, res) => {
  res.send("ABOUT HARDCODED");
});

app.get("/api/userID", (req, res) => {
  res.send([{ name: "Sandro", lastName: "Rococco" }]);
});

app.get("/api/products", (req, res) => {
  res.send("ABOUT HARDCODED");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
