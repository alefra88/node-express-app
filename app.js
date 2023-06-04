const express = require("express");
const path = require("path");

const app = express();

// setup static and middlewares
app.use(express.static("./public"));


// Home Page
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// });


// 404
app.all("*", (req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
