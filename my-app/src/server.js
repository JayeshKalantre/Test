const path = require('path');
var bodyParser = require("body-parser");
var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();

var httpsServer = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(express.static("" + __dirname));
app.use(function (request, response, next) {
response.setHeader('Access-Control-Allow-Origin','*');
response.setHeader('Access-Control-Allow-Methods','GET','POST');
response.setHeader('Access-Control-Allow-Headers','Content-Type');
response.setHeader('Access-Control-Allow-Credentials',true);
next();
});


var __dirname = "C:/Users/jayesh/Downloads/FristReact/my-app"

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

httpsServer.listen(4444, function () {
console.log("listen on port 4444");
});