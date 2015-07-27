'use strict';

var express = require('express');
var app = express();
var request = require('request');

app.use(express.static(__dirname + '/public'));

// var testBeer;

// request('http://api.brewerydb.com/v2/beer/oeGSxs?key=d494efd8b968c2b377afa7208751cd3c', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body);
//     testBeer = body;
//   }
// });

// app.get('/testbeer', function(request, response) {
//   response.status(200).send(testBeer);
// });

app.get('/*', function(req, res) {
  res.status(404).send("<h1>404 Error</h1>");
});

app.listen(process.env.PORT || 5000, function() {
  console.log('The server is running on port 5000');
});
