//MongoDB request information
var db = 'https://api.mongolab.com/api/1/databases/beer-seattle/collections';
var collection;
var apiKey = '?apiKey=RjwSNykUJAE_wUTwNZhqr-h0pqxjJzne';
var contentType = 'application/json';
var dataType = 'json';

//Arrays to store each style of beer
var ipa,
    strongAle,
    stoutPorter,
    lagerPilsner,
    scotch,
    pale,
    wheat,
    belgian,
    sour,
    bock,
    misc;

//MongoDB oid's for each style document in the db
var ipaId = "/ipa/55b84eb37e1ee7f743ec5671";
var strongAleId = "/strong-ale/55b8540a7e1ee7f743ec5672";
var stoutPorterId = "/stout-porter/55b8566c7e1ee7f743ec5673";
var lagerPilsnerId = "/lager-pilsner/55b8595a7e1ee7f743ec5674";
var scotchId = "/scotch/55b859cb7e1ee7f743ec5675";
var paleId = "/pale/55b85c827e1ee7f743ec5676";
var wheatId = "/wheat/55b85d827e1ee7f743ec5677";
var belgianId = "/belgian/55b85e8d7e1ee7f743ec5678";
var sourId = "/sours/55b84ab47e1ee7f743ec5670";
var bockId = "/bock/55b85ee67e1ee7f743ec5679";
var miscId = "/misc/55b85fb57e1ee7f743ec567a";

//Populate a style array with data from MongoDB
var requestBeersByStyle = function(style) {
  switch(style) {
    case "ipa":
      collection = ipaId;
      break;
    case "strongAle":
      collection = strongAleId;
      break;
    case "stoutPorter":
      collection = stoutPorterId;
      break;
    case "lagerPilsner":
      collection = lagerPilsnerId;
      break;
    case "scotch":
      collection = scotchId;
      break;
    case "pale":
      collection = paleId;
      break;
    case "wheat":
      collection = wheatId;
      break;
    case "belgian":
      collection = belgianId;
      break;
    case "sour":
      collection = sourId;
      break;
    case "bock":
      collection = bockId;
      break;
    case "misc":
      collection = miscId;
      break;
  }
  $.ajax({
    url: db + collection + apiKey,
    type:'GET',
    async: true,
    contentType: contentType,
    dataType: dataType,
    success: console.log("Connected to MongoDB")
  })
  .done(function(response) {
    switch(style) {
      case "ipa":
        ipa = response.data;
        break;
      case "strongAle":
        strongAle = response.data;
        break;
      case "stoutPorter":
        stoutPorter = response.data;
        break;
      case "lagerPilsner":
        lagerPilsner = response.data;
        break;
      case "scotch":
        scotch = response.data;
        break;
      case "pale":
        pale = response.data;
        break;
      case "wheat":
        wheat = response.data;
        break;
      case "belgian":
        belgian = response.data;
        break;
      case "sour":
        sour = response.data;
        break;
      case "bock":
        bock = response.data;
        break;
      case "misc":
        misc = response.data;
        break;
    }
  }
    $(document).ajaxStop(function () {
      $("#loading").hide();
    });
}
