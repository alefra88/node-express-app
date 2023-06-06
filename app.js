const express = require("express");
const app = express();
const { products } = require("./data");

//api / products
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

//api single product
app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  res.send("hello wolrd from review");
  console.log(req.params);
});

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  res.send("hello world");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
