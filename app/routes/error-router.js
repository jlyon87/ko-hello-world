"use strict";
const express = require("express");
const path = require("path");
const router = express.Router();

router.get('/*', function(req, res) {
	console.log("err req.params: ", req.params);
	res.sendFile( path.join(__dirname, '../public', 'error.html') );
});

module.exports = router;