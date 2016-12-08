"use strict";
const express = require("express");
const app = express();
const path = require("path");

const router = require("./routes/app-router");
const resourceRouter = require("./routes/resource-router.js");
const publicRouter = require("./routes/public-router.js");
const modelRouter = require("./routes/models-router.js");

const errRouter = require("./routes/error-router.js");

app.use('/',
	router,
	resourceRouter,
	publicRouter,
	modelRouter,

	errRouter);

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
	console.log("Node App listening on port:", app.get('port'));
});