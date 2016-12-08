"use strict";
const express = require("express");
const app = express();
const path = require("path");
const router = require("./router");

app.set('port', (process.env.PORT || 5000));

app.use('/', router);

app.listen(app.get('port', function() {
	console.log("Node App listening on port:", app.get('port'));
}));
