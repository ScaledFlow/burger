console.log("made it to connection.js in config");

// Set up MySQL connection.
var mysql = require("mysql");

// Local connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Timber8293$@",
  database: "burger_db",
});

// Heroku connection
// var connection = mysql.createConnection({
//   host: "g8mh6ge01lu2z3n1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//   port: 3306,
//   user: "wf8min6ot238nq1u",
//   password: "nrdruycwl3t89kmm",
//   database: "uykpxqmtjmio4fo7",
// });

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
