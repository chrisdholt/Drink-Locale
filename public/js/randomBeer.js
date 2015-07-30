$(document).ready(function() {

  //Parse the URL to get the user's input
  var getUserInput = function(inputName) {
    var urlSearch = window.location.search;
    var inputArray = urlSearch.split(inputName + "=");
    return inputArray[1];
  };

  var getBeerFromLocal = function(id) {
    var workingArray = JSON.parse(localStorage["beerHistory"]);
    console.log(workingArray);
    for(var i = workingArray.length-1; i >= 0; i--) {
      if(workingArray[i].id == id) {
        return workingArray[i];
      }
    }
    return false;
  };

  var renderBeer = function() {
    $("#beerName").html(beer.name);
    if(beer.labels) {
      $("#beerPic").attr("src", beer.labels.medium);
    }
    if(beer.description) {
      $("#description").html(beer.description);
    } else if(beer.style.description) {
      $("#description").html(beer.style.description);
    } else {
      $("#description").html("Sorry, we don't have a description for this beer.");
    }
    if(beer.breweries) {
      $("#brewery").html("<strong>BREWERY:</strong> " + beer.breweries[0].name);
    }
    if(beer.abv) {
      $("#abv").html("<strong>ABV:</strong> " + beer.abv);
    }
    $("#style").html("<strong>STYLE:</strong> " + beer.style.shortName);
    if(beer.ibu) {
      $("#ibu").html("<strong>IBU:</strong> " + beer.ibu);
    }
  };

  var beerId = getUserInput("id");
  var beer = getBeerFromLocal(beerId);
  renderBeer();

});
