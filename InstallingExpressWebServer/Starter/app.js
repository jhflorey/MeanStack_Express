
var express = require('express');
var app = express();


// //Environment vartiables: global variables specific to the environment (server) our code is living in 
// // different server may have differemt varibale
// // then use javascript trick to default the port is 3000

var port = process.env.PORT || 3000;


// // HTTP method: specifies the type of action the request wishes to make 
// // Get, oist, delete, and others. Also called verbs

app.get('/', function(req, res) {
	res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/api', function(req, res) {
	res.json({firstname: 'Jessica', lastname: 'Florey'});
});

app.listen(port);

