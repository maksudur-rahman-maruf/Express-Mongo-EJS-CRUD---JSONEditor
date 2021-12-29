
var mongoose = require("mongoose");
var Schema = require("../models/Schema");

var schemaController = {};


// Return list of schema(payload)
schemaController.list_payload = function(req, res) {
    Schema.find({}).exec(function (err, schema) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.send(schema);
    }
  });
};

module.exports = schemaController;