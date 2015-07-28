'use strict';

var express = require('express');
var app = express();
var request = require('request');
var fs = require('fs');
var seattleBeers = require('./api_data/beers-seattle.json');
console.log(seattleBeers.data.length);

app.use(express.static(__dirname + '/public'));

app.get('/testbeer', function(request, response) {
  response.status(200).send(testBeers);
});

app.get('/beer', function(request, response) {
  response.status(200).send(seattleBeers.data[45]);
});

app.get('/*', function(req, res) {
  res.status(404).send("<h1>404 Error</h1>");
});

app.listen(process.env.PORT || 5000, function() {
  console.log('The server is running on port 5000');
});


//
//HERE IS OUR API PARSING CODE
//


var parseData = function(input) {
  var stringed = JSON.stringify(input);
  return JSON.parse(stringed);
};

//var parsed = parseData(inputData);

//Create an array of brewery id's from a JSON object of breweries
var createBreweryIdArray = function(parsedApiData) {
  var idArray = [];
  parsedApiData.data.forEach(function(value) {
    idArray.push(value.breweryId);
  });
  return idArray;
};

//var seattleBreweries = createBreweryIdArray(parsed);

var getBeersByBreweries = function(breweryIdArray) {
  var breweryId, url;
  var beerArray = [];
  breweryIdArray.forEach(function(value) {
    breweryId = value;
    url = "http://api.brewerydb.com/v2/brewery/" + breweryId + "/beers?withBreweries=Y&key=8bb9172935450318681f65869287387d";
    request(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var parsedBody = JSON.parse(body);
        if(parsedBody.data) {
          parsedBody.data.forEach(function(value) {
            beerArray.push(value);
          });
        }
      }
    });
  });
  console.log(beerArray);
  return beerArray;
};

//var getBeersBySingleBrewery = function()

// var testBeers = getBeersByBreweries(seattleBreweries);
// console.log(testBeers);

var parseBeers = function(path) {
  var parsedBeers;
  fs.readFile(path, function(err, data) {
    if(!err) {
      console.log("in the if");
      parsedBeers = JSON.parse(data);
    }
  });
  return parsedBeers;
};

//Check if an item is in the array
var existsInArray = function(arrayToSearch, item) {
  for(var i=0; i < arrayToSearch.length; i++) {
    if(arrayToSearch[i] == item) {
      return true;
    }
  }
  return false;
};

//Get an array of styles from an array of beers
var getBeerStyles = function(beers) {
  var styleArray = [];
  seattleBeers.data.forEach(function(value) {
    if(value.style) {
      if(!existsInArray(styleArray, value.style.shortName)) {
        styleArray.push(value.style.shortName);
      }
    }
  });
  return styleArray;
};

console.log(getBeerStyles(seattleBeers));
