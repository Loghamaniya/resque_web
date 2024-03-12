let { query } = require("express");
const express = require("express");
const connection = require("../../connection");

const router = express.Router();

router.get("/login.html", function (req, res) {
  res.sendFile(__dirname + "/login.html");
});

router.post("/login.html", (req, res) => {
  console.log(req.body);
  var user = req.body.username;
  var password = req.body.password;
  module.exports.user = user;

  connection.query(
    "select * from user where u_name='" +
    user +
    "' and u_password='" +
    password +
    "' ",
    function (error, results, fields) {
      console.log(results);
      if (results.length > 0) {
        res.redirect("../police/police");
      } else {
        res.redirect("/frontend/login/login.html");
      }
      res.end();
    }
  );
});

module.exports = router;
