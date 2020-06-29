console.log("made it to burgers_controllers.js in controllers");

var mysql = require("mysql");

var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

console.log("made it to bugers_controller.js in controllers after require");

// test test connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Timber8293$@",
  database: "burger_db",
});

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  connection.query("SELECT * FROM burgers;", function (err, data) {
    if (err) {
      return res.status(500).end();
    }

    console.log(data);

    res.render("index", { burgers: data });
  });
});

// burger.all(function (data) {
//   var hbsObject = {
//     burger: data,
//   };
//   console.log(hbsObject);
//   res.render("index", hbsObject);
// });
console.log("made it to router.get");
//console.log(req);

// Export routes for server.js to use.

module.exports = router;
