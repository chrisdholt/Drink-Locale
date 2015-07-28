$(document).ready(function() {

var db = 'https://api.mongolab.com/api/1/databases/beer-seattle/collections';
var collection = "/beer/55b7e76e7e1ee7f743ec566e";
var apiKey = '?apiKey=RjwSNykUJAE_wUTwNZhqr-h0pqxjJzne';
var contentType = 'application/json';
var dataType = 'json';
var seattleBeer;

$.ajax({
    url: db + collection + apiKey,
    type:'GET',
    async: false,
    contentType: contentType,
    dataType: dataType,
    success: console.log("Connected to MongoDB")
  }).done(function(response) {
    console.log("in the done statement");
    seattleBeer = response.data;
  })
  .fail(function(error) {
    console.log(error);
  });


});
