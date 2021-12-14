const path = require("path");
var express = require("express");
const fs = require("fs");
var router = express.Router();

let products = fs.readFileSync(path.resolve(__dirname, "../products.json"));

let parsedProducts = JSON.parse(products);

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(parsedProducts);
  ///diferenta res.json si res.send?
});

module.exports = router;
