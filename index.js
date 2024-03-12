// const express = require("express");
// var cors = require("cors");
// const connection = require("./frontend/report/connection");
// // const userRoute = require("./routes/user");
// // const categoryRoute = require("./routes/category");
// // const productRoute = require("./routes/product");
// const app = express();

// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // app.use("/user", userRoute);
// // app.use("/category", categoryRoute);
// // app.use("/product", productRoute);
const express = require("express");



var cors = require("cors");
const connection = require("./connection");
const loginRoute = require("./frontend/login/login");
const mainRoute = require("./frontend/main/tech");
const reportRoute = require("./frontend/report/report");
const policeRoute = require("./frontend/police/fetch");
const thankRoute = require("./frontend/thank/thank");
const historyRoute = require("./frontend/history/history");


const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/frontend/login/", loginRoute);
app.use("/frontend/main/", mainRoute);
app.use("/frontend/report/", reportRoute);
app.use("/frontend/police/", policeRoute);
app.use("/frontend/thank/", thankRoute);
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
module.exports = app;
// app.use('/', indexRouter);



// module.exports = app;