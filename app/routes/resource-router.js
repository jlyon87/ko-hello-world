"use strict";
const express = require("express");
const path = require("path");
const router = express.Router();

router.get('/bootstrap.css', function(req, res) {
	res.sendFile( path.join(__dirname, '../node_modules', 'bootstrap/dist/css/bootstrap.min.css') );
});

router.get('/bootstrap.min.css.map', function(req, res) {
	res.sendFile( path.join(__dirname, '../node_modules', 'bootstrap/dist/css/bootstrap.min.css.map') );
});

router.get('/bootstrap.js', function(req, res) {
	res.sendFile( path.join(__dirname, '../node_modules', 'bootstrap/dist/js/bootstrap.min.js') );
});

router.get('/knockout.js', function(req, res) {
	res.sendFile( path.join(__dirname, '../node_modules', 'knockout/build/output/knockout-latest.js') );
});

router.get('/favicon.ico', function(req, res) {
	res.sendFile( path.join(__dirname, 'assets', 'favicon5.ico') );
});

module.exports = router;