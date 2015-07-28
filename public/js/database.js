var db = 'https://api.mongolab.com/api/1/databases/drinklocale/collections';
var collection = "/test/55b7ca97e4b068317b8727d3";
var apiKey = '?apiKey=r-F49Lou1bSYoiHF-52v0dw9IegCiTI1';
var contentType = 'application/json';
var dataType = 'json';
var x = $.ajax({
    url: db + collection + apiKey,
    type:'GET',
    contentType: contentType,
    dataType: dataType,
    success: console.log("Connected to database")
  });
console.log(JSON.parse(x.responseText));
