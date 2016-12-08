"use strict";
const express = require("express");
const path = require("path");
const router = express.Router();

router.get('/models/ko-intro-model.js', function(req, res) {
	res.sendFile( path.join(__dirname, '../models', 'ko-intro-model.js'));
});

router.get('/models/ko-collections-model.js', function(req, res) {
	res.sendFile( path.join(__dirname, '../models', 'ko-collections-model.js'));
});

router.get('/models/ko-spa-model.js', function(req, res) {
	res.sendFile( path.join(__dirname, '../models', 'ko-spa-model.js'));
});

module.exports = router;