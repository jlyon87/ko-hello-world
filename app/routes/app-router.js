"use strict";
const express = require("express");
const path = require("path");
const router = express.Router();

// Log Actions
router.use(function timeLog (req, res, next) {
	console.log('Time: ', Date.now());
	next();
});

router.get('/', function(req, res) {
	res.sendFile( path.join(__dirname, '../public', 'index.html') );
});

module.exports = router;