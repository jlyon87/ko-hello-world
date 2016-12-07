"use strict";
const express = require("express");
const app = express();
const path = require("path");
const router = require("./router");


app.use('/', router);

app.listen(8000);
console.log("Server listening on port:8000.");