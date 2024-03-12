let { query } = require("express");
const express = require("express");
const connection = require("../../connection");
const nodemailer = require("nodemailer");
const router = express.Router();
const fs = require("fs");

router.get("/report.html", function (req, res) {
  res.sendFile(__dirname + "/report.html");
});

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// const imageData = fs.readFileSync('../images/Nandhu bike pic.jpeg');
// console.log(imageData);

router.post("/report.html", (req, res) => {
  console.log(req.body);
  var pic = req.body.picture;
  // var audio = req.body.voice;
  var type = req.body.type;
  var per_injured = req.body.per_injured;
  var landmark = req.body.landmark;
  var text = req.body.text;
  var police = req.body.police;
  var fire = req.body.fire;
  var hospital = req.body.hospital;
  var latitude = req.body.latitude;
  var longitude = req.body.longitude;
  let nearestPolice = req.body.nearestPolice;
  let nearestHosp = req.body.nearestHosp;
  console.log("hi")
  // connection.connect(function (error) {
  //     if (error) throw error;
  var query =
    "insert into report(r_pic,r_acctype,r_accno,r_landmark,r_comment,police,fire,hospital,r_lat,r_long, r_nearestPolice, r_nearestHosp) values('" +
    pic +
    "','" +
    type +
    "','" +
    per_injured +
    "','" +
    landmark +
    "','" +
    text +
    "','" +
    police +
    "','" +
    fire +
    "','" +
    hospital +
    "','" +
    latitude +
    "','" +
    longitude +
    "','" +
    nearestPolice +
    "','" +
    nearestHosp +
    "')";

  var sql = "select u_email from user where u_name=?";

  connection.query(sql, [nearestPolice], (err, results) => {
    if (!err) {
      console.log(results);
      if (results.length <= 0) {
        // return res.status(200).json({ message: "Password send Successfully" });
      } else {
        var mailOptions = {
          from: process.env.EMAIL,
          to: results[0].u_email,
          subject: "RESQWEB",
          html: "<p><b>There is an accident</b> please check our website</p>",
        };
        // transporter.sendMail(mailOptions);
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });
      }
    } else {
      return res.status(500).json(err);
    }
  });

  connection.query(query, function (error, result) {
    if (error) throw error;
    res.redirect("/frontend/thank/thank.html");
  });
  // });
});
module.exports = router;
