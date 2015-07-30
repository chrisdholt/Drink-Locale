$(document).ready(function() {

  //Get the user's history from local storage
  var history = [];
  if(localStorage["beerHistory"]) {
    history = JSON.parse(localStorage["beerHistory"]);
  }

  //Render the user's history to the page
  var renderHistory = function() {
    var listing;
    var beerLink;
    history.forEach(function(beer) {
      beerStyle = getBeerStyle(beer);
      beerLink = '<a href="./beer.html?id=' + beer.id + '&style=' + beerStyle + '">' + beer.name + "</a>";
      console.log(beerLink);
      listing = "<li>" + beerLink + "</li>";
      console.log(listing);
      $(".historyList").append(listing);
    });
  }

  //Get the style category from our app that the beer belongs to
  var getBeerStyle = function(beer) {
    for (var i = 0; i < styles.length; i++) {
      for (var j = 0; j < styles[i][0].length; j++) {
        if (styles[i][0][j] == beer.style.shortName) {
          return styles[i][1];
        };
      };
    };
    return false;
  }

  //Our categories of beer
  //ipa, strongAle, stoutPorter, lagerPilsner, scotch, pale,
  //wheat, belgian, sour, bock, misc
  var styles = [ipa, strongAle, stoutPorter, lagerPilsner, scotch, pale, wheat, belgian, sour, bock, misc];
  var ipa = [[
    'Imperial IPA',
    'American IPA',
    'English IPA',
    'Wet Hop Ale',
    'Imperial Red',
    'Irish Red'
    ], "ipa"];

  var strongAle = [[
    'American Strong Pale',
    'Wheatwine',
    'BBL Aged Strong',
    'American Imperial Porter',
    'Old Ale',
    'Braggot',
    'BBL Aged Dark',
    'American Barleywine',
    'British Barleywine',
    'BBL Aged',
    'Aged Beer',
    'Strong Ale',
    'Malt Liquor'
    ], "strongAle"];

  var stoutPorter = [[
    'American Stout',
    'Sweet Stout',
    'Cream Ale',
    'Dry Irish Stout',
    'American Imperial Stout',
    'Export Stout',
    'Oatmeal Stout',
    'Stout',
    'Coffee Beer',
    'Baltic Porter',
    'English Brown',
    'Robust Porter',
    'Brown Porter',
    'American Brown'
    ], "stoutPorter"];

  var lagerPilsner = [[
    'Vienna Lager',
    'Oktoberfest',
    'American Dark Lager',
    'German Pilsener',
    'Kölsch',
    'International Pilsener',
    'American Premium Lager',
    'American Pilsener',
    'Bohemian Pilsener',
    'Märzen',
    'American Lager',
    'California Common',
    'Black Ale',
    'Schwarzbier',
    'Euro Dark'
    ], "lagerPilsner"];

  var scotch = [[
   'Scottish Export',
   'Scotch Ale'
   ], "scotch"];

  var pale = [[
    'Special Bitter',
    'English Dark Mild',
    'Amber',
    'Bitter',
    'Bière de Garde',
    'English Pale Mild',
    'Blonde',
    'ESB',
    'Austrailian Pale',
    'English Pale',
    'American Pale',
    'German Rye',
    'Rye Ale'
    ], "pale"];

  var wheat = [[
   'Witbier',
   'Wheat Ale',
   'Dunkelweizen',
   'Hefeweizen',
   'Bernsteinfarbenesweizen'
   ], "wheat"];

  var belgian = [[
    'Belgian Pale',
    'Belgian Blonde',
    'Belgian Dubbel',
    'Belgian Pale Strong',
    'American/Belgian Dark',
    'Belgian Dark Strong',
    'Belgian Ale',
    'Belgian Tripel',
    'Saison',
    'American/Belgian Pale',
  ], "belgian"];

  var sour = [[
    'BBL Aged Sour',
    'Sour',
    'Brett',
    'Berlinerweisse'
  ], "sour"];

  var bock = [[
    'Doppelbock',
    'Maibock',
    'Bock',
    'Weizenbock',
    'Altbier'
  ], "bock"];

  var misc = [[
    'Specialty',
    'Spice Beer',
    'Pumpkin Beer',
    'Smoke Beer',
    'Fruit Beer',
    'Fruit Wheat Ale',
    'Common Cider',
    'New England Cider',
    'Experimental Beer',
    'Flavored Malt Beverage',
    'Experimental Beer'
  ], "misc"];
  var styles = [ipa, strongAle, stoutPorter, lagerPilsner, scotch, pale, wheat, belgian, sour, bock, misc];

  renderHistory();

});