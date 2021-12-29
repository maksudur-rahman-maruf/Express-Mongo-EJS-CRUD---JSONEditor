var express = require('express');
var router = express.Router();
var schema = require("../controllers/SchemaController.js");


// Returns just payload
// Get all employees
router.get('/list_schema_payload', function(req, res) {
    schema.list_payload(req, res);
});

module.exports = router;