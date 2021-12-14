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

router.get("/:id", function (req, res, next) {
  let id = req.params.id;
  let filteredUser = users.find((item) => item.id == id);

  if (filteredUser === undefined) {
    res.status(404).json({ error: "user not found" });
  }
  res.status(200).json(filteredUser);

  console.log(filteredUser);
});

module.exports = router;
