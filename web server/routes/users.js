const axios = require("axios").default;
const path = require("path");
var express = require("express");
const fs = require("fs");
var router = express.Router();

let rawdata = fs.readFileSync(path.resolve(__dirname, "../users.json"));

let users = JSON.parse(rawdata);

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(users);
});

module.exports = router;
