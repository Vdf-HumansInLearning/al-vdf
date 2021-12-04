const axios = require("axios").default;
const path = require("path");
var express = require("express");
const fs = require("fs");
var router = express.Router();

let rawdata = fs.readFileSync(path.resolve(__dirname, "../users.json"));

let users = JSON.parse(rawdata);

router.post("/", function (req, res, next) {
  users.push({
    id: users[users.length - 1].id + 1,
    name: "",
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    role: false,
    loggedin: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  fs.writeFile("./users.json", JSON.stringify(users), function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Write operation complete.");
    }
  });
  res.send("Successfully registered");
});

module.exports = router;
