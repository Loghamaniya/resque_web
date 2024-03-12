const express = require("express");
// const app = express();
const connection = require("../../connection");
const router = express.Router();
var getdetails = require("../login/login");

// const query = "SELECT * FROM report";

// connection.query(query, function (error, results, fields) {
//     if (error) th  row error;
//     //   console.log(results);
//     console.log(results[0]);
// });

// app.set("report", "ejs");

router.get("/police", function (req, res) {
  const loguser = getdetails.user;
  console.log(loguser);
  const query =
    "SELECT * FROM report where (r_nearestPolice = '" +
    loguser +
    "') and r_complete='no' and police='yes' order by r_id desc;";

  const sql =
    "SELECT * FROM report where (r_nearestPolice = '" +
    loguser +
    "') and r_complete='yes';";

  connection.query(query, function (error, results, fields) {
    if (error) throw error;
    connection.query(sql, function (err, resu, field) {
      if (err) throw error;
      console.log(results);
      console.log(resu);
      // console.log(results[0]["r_landmark"]);
      res.render("police", {
        title: "User List",
        report: results,
        creport: resu,
      });
    });
  });

  // connection.query(query2, function (error, results, fields) {
  //   if (error) throw error;
  //   //   console.log(results);
  //   console.log(results[0]["r_landmark"]);
  //   res.render("police", { title: "User List", report: results[0] });
  // });

  connection.query("SELECT r_pic FROM report", (err, result) => {
    if (err) throw err;
    const image_base64 = Buffer.from(result[0].r_pic).toString("base64");
    const html = `<img src="data:image/jpeg;base64,${image_base64}" alt="image">`;
    console.log(html);
  });
});

router.get("/history", function (request, response) {
  response.render("../frontend/history/history");
});

router.get("/completed/:id", function (request, response) {
  var id = request.params.id;
  var query = `update report set r_complete='yes' where r_id='${id}';`;

  connection.query(query, function (error, data) {
    if (error) throw error;
  });
});

module.exports = router;
