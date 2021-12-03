var createError = require("http-errors");
var express = require("express");
const bodyparser = require("body-parser");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var usersRouter = require("./routes/users");
var phonesRouter = require("./routes/phones");
const loginRouter = require("./routes/login");

const registerRouter = require("./routes/register");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public")));

app.use("/users", usersRouter);
app.use("/phones", phonesRouter);
app.use("/login", loginRouter);

//app.use("/details", detailsRouter);

app.use("/register", registerRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

const port = 3001;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;