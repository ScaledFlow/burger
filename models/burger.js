console.log("made it to burger.js in models");

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var cat = {
  all: function (cb) {
    orm.all("burger", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function (cols, vals, cb) {
    orm.create("burger", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("burger", objColVals, condition, function (res) {
      cb(res);
    });
  },
  delete: function (condition, cb) {
    orm.delete("burger", condition, function (res) {
      cb(res);
    });
  },
};

console.log("made it to burger.js in models after requiring orm.js");

// Export the database functions for the controller (burgers_controller.js).
// module.exports = burger;