require("dotenv").config();
const http = require("http");
const app = require("./index");
const server = http.createServer(app);
server.listen(process.env.PORT);
// const express = require("express");
// // const connection = require("./frontend/report/connection");

// const app = express();
// var http = require("http");
// // const app = require("./frontend/report/report.js");
// // const app1 = require("./frontend/main/tech.js");
// var fs = require("fs");

// var url = require('url');

// http.createServer((req, res) => {
//     // console.log("hi");
//     var q = url.parse(req.url, true);
//     // console.log(q);
//     var filename = "." + q.pathname;
//     // console.log(filename);
//     fs.readFile(filename, function (err, data) {
//         if (err) {
//             res.writeHead(404, { 'Content-Type': 'text/html' });
//             return res.end("Page not found");
//         }
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data);
//         return res.end();
//     })

//     app.post('/frontend/report/report.html', function (req, res) {
//         console.log(req.body);
//         var pic = req.body.picture;
//         var audio = req.body.voice;
//         var type = req.body.type;
//         var per_injured = req.body.per_injured;
//         var landmark = req.body.landmark;
//         var text = req.body.text;

//         // connection.connect(function (error) {
//         //     if (error) throw error;
//         var sql = "insert into report(r_pic,r_audio,r_acctype,r_accno,r_landmark,r_comment) values('" + pic + "','" + audio + "','" + type + "','" + per_injured + "','" + landmark + "','" + text + "')";

//         connection.query(sql, function (error, result) {
//             if (error) throw error;
//             res.send("Success");
//         })
//         // });

//     })
// }).listen(5570);
// console.log("Server is running");
// // const server = http.createServer(app);
// // server.listen(process.env.PORT);
