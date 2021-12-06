const axios = require("axios").default;
var express = require("express");
const fs = require("fs");

var router = express.Router();

router.get("/", function (req, res, next) {
  router.get("./users/:id", (req, res) => {
    res.send("welcome" + req.params.id);
  });
  console.log(req.params);
  res.render("login", { title: "Login" });
});

module.exports = router;

// const { response } = require("express");
// var express = require("express");
// const fs = require("fs");
// var router = express.Router();

// /* GET users listing. */
// router.get("/", function (req, res, next) {
//   let users = JSON.parse(fs.readFileSync("./users.json", "utf8"));
//   res.send(users);
// });

// module.exports = router;
