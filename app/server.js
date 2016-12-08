"use strict";
const express = require("express");
const app = express();
const path = require("path");
const router = require("./router");

//app.set('port', (process.env.PORT || 5000));

app.use('/', router);

console.log(process.env.PORT);
console.log('before port setter');
app.set('port', (process.env.PORT || 5000));
console.log('after port setter');
app.listen(app.get('port'), function() {
	console.log("Node App listening on port:", app.get('port'));
});


console.log(process.env.PORT);
/*app.listen(process.env.PORT || 5000);
console.log("Server.js is listening on port: 5000.");*/
