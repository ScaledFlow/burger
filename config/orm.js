console.log("made it to orm.js in config");

// Import MySQL connection.
var connection = require("../config/connection.js");
console.log("made it to orm.js in config after require of connection.js");

function selectAll() {}

function selectOne() {}

function updateOne() {}

// Export the orm object for the model (burger.js).
// module.exports = orm;
