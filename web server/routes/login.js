const axios = require("axios").default;
var express = require("express");
const fs = require("fs");

var router = express.Router();

router.get("/", function (req, res, next) {
  router.get("./user/:id", (req, res) => {
    res.send("welcome" + req.params.id);
  });
  console.log(req.params);
  res.render("login", { title: "Login" });
});

module.exports = router;
