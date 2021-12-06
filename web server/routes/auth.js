const express = require("express");
const fs = require("fs");
const router = express.Router();

router.post("/login", function (req, res, next) {
  console.log(req.body);
  let users = JSON.parse(fs.readFileSync("./users.json", "utf8"));
  let user = users.find(
    (user) =>
      user.email === req.body.email && user.password === req.body.password
  );
  console.log(user);
  res.json(user);
});

router.post("/register", function (req, res) {
  console.log(req.body);
  users.push({
    id: users[users.length - 1].id + 1,
    name: "",
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    role: "user",
    loggedin: false,
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
      console.log("Operation complete.");
    }
  });
  res.send("Successfully registered");
});

module.exports = router;
