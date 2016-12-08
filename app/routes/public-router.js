"use strict";
const express = require("express");
const path = require("path");
const router = express.Router();

router.get('/ko/intro', function(req, res) {
	res.sendFile( path.join(__dirname, '../public', 'ko-intro-tut.html') );
});

router.get('/ko/collections', function(req, res) {
	res.sendFile( path.join(__dirname, '../public', 'ko-collections-tut.html') );
});

router.get('/ko/spa', function(req, res) {
	res.sendFile( path.join(__dirname, '../public', 'ko-spa-tut.html') );
});

module.exports = router;