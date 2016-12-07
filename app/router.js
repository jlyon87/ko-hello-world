"use strict";
const express = require("express");
const path = require("path");
const router = express.Router();

// Log Actions
router.use(function timeLog (req, res, next) {
	console.log('Time: ', Date.now());
	next();
});

// Page Routers Router
router.get('/', function(req, res) {
	res.sendFile( path.join(__dirname, 'public', 'index.html') );
});

router.get('/intro', function(req, res) {
/*	router.use( express.static('/node_modules/knockout/build/output/knockout-latest.js') );
	router.use( express.static('/js/intro-ko-model.js') );*/

	res.sendFile( path.join(__dirname, 'public', 'intro-ko-tut.html') );
});

router.get('/collections', function(req, res) {
/*	router.use( express.static('/node_modules/knockout/build/output/knockout-latest.js') );
	router.use( express.static('/js/intro-ko-model.js') );*/

	res.sendFile( path.join(__dirname, 'public', 'collections-ko-tut.html') );
});

// Resource Routers
router.get('/bootstrap.css', function(req, res) {
	res.sendFile( path.join(__dirname, 'node_modules', 'bootstrap/dist/css/bootstrap.min.css') );
});

router.get('/knockout.js', function(req, res) {
	res.sendFile( path.join(__dirname, 'node_modules', 'knockout/build/output/knockout-latest.js') );
});

router.get('/intro-ko-model.js', function(req, res) {
	res.sendFile( path.join(__dirname, 'js', 'intro-ko-model.js'));
});

router.get('/collections-ko-model.js', function(req, res) {
	res.sendFile( path.join(__dirname, 'js', 'collections-ko-model.js'));
});

router.get('/favicon.ico', function(req, res) {
	res.sendFile( path.join(__dirname, 'assets', 'favicon5.ico') );
});

// Error Router - pick up anything that doesn't match the above.
router.get('/*', function(req, res) {
	res.sendFile( path.join(__dirname, 'public', 'error.html') );
});

module.exports = router;