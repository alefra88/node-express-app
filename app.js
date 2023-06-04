// const express = require("express");
// const app = express();

const app = require("express")();


//home page
app.get("/", (req, res) => {
  console.log("user hit de resource");
  res.send("Hardcoded Home Page");
});


//about
app.get("/about",(req,res)=>{
  res.send("<h1>Hardcoded About Page</h1>")
})

app.all("*",(req,res)=>{
  res.status(404).send("<h1>Resource not found</h1>")
})
app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
