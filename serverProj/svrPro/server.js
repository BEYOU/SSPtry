var express = require('express');
//var mongojs = require('mongojs');
//var db = mongojs("cs561002", ["employees"]);
var app = express();

app.get(express.static(__dirname + '/public'));


app.listen(8080);
