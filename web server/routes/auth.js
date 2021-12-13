const express = require("express");
const fs = require("fs");
const path = require("path");
const cookieParser = require("cookie-parser");
const router = express.Router();

router.post("/login", function (req, res, next) {
  console.log(req.body);

  //validation

  let users = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../users.json"), "utf8")
  );
  let userFound = users.find(
    (user) =>
      user.email === req.body.email && user.password === req.body.password
  );
  console.log(userFound);
  if (userFound) {
    console.log(req.body.email);
    res.cookie("user", `${req.body.email}`);
    res.cookie("password", `${req.body.password}`);
    // res.send(JSON.stringify(req.cookies));
    // console.log(res.cookie);
    res.status(220).json(userFound);
  } else {
    res.status(404).send("User not found");
  }
});

router.get("/login", (req, res) => {
  // res.cookie("user", req.body.email);
  // res.cookie("password", req.body.password);
  res.send(JSON.stringify(req.cookies));
});

router.post("/register", function (req, res) {
  // console.log(req.body);

  let user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };

  let errors = validateUser(user);

  if (errors.length > 0) {
    res.status(400);
    res.send(errors);
  }

  let users = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../users.json"), "utf8")
  );
  users.push({
    id: users[users.length - 1].id + 1,
    name: "",
    username: user.username,
    email: user.email,
    password: user.password,
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

  fs.writeFile(
    path.resolve(__dirname, "../users.json"),
    JSON.stringify(users),
    function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Operation complete.");
      }
    }
  );
  res.send("Successfully registered");
});

function validateUser(user) {
  let errors = [];

  if (!user.email) {
    errors.push("User email is required");
  } else if (!user.password) {
    errors.push("Password is required");
  } else if (user.password.length < 6) {
    errors.push("Password must have at least 6 characters");
  }

  return errors;
}

module.exports = router;
