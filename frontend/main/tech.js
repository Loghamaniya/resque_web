
// const express = require("express");
// const app1 = express();
// const connection = require('../../connection');
// console.log("hi");

// var bodyParser = require('body-parser');

// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: true }));


// app.get('/frontend/report/report.html', function (req, res) {
//     res.sendFile(__dirname + '/report.html');

// });

// app.post('/frontend/report/report.html', function (req, res) {
//     console.log(req.body);
//     var pic = req.body.picture;
//     var audio = req.body.voice;
//     var type = req.body.type;
//     var per_injured = req.body.per_injured;
//     var landmark = req.body.landmark;
//     var text = req.body.text;

//     // connection.connect(function (error) {
//     //     if (error) throw error;
//     var sql = "insert into report(r_pic,r_audio,r_acctype,r_accno,r_landmark,r_comment) values('" + pic + "','" + audio + "','" + type + "','" + per_injured + "','" + landmark + "','" + text + "')";

//     connection.query(sql, function (error, result) {
//         if (error) throw error;
//         res.send("Success");
//     })
//     // });

// })
// app1.listen(5570);
// module.exports = app1;

let { query } = require("express");
const express = require("express");
const connection = require('../../connection');
const router = express.Router();

router.get('/tech.html', function (req, res) {
    res.sendFile(__dirname + '/tech.html');
});

module.exports = router;
