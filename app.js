const express = require("express");
const app = express();

//midleware
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
};

app.get("/",logger, (req, res) => {
  res.send("HOME HARDCODED");
});

app.get("/about",logger, (req, res) => {
  res.send("ABOUT HARDCODED");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
