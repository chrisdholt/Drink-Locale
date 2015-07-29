$(document).ajaxStart(function () {
    $("#loading").show();
});

$(document).ready(function() {

//In Asynch, this will load the gif and allow it to run when ajax call is happening.
  // $(document).ajaxStart(function () {
  //     $("#loading").show();
  // });

  // $(document).ajaxStop(function () {
  //     $("#loading").hide();
  // });

var db = 'https://api.mongolab.com/api/1/databases/beer-seattle/collections';
var collection = "/beer/55b7e76e7e1ee7f743ec566e";
var apiKey = '?apiKey=RjwSNykUJAE_wUTwNZhqr-h0pqxjJzne';
var contentType = 'application/json';
var dataType = 'json';
var seattleBeer;

//Groupings of beer styles
//ipa, strongAle, stoutPorter, lagerPilsner, scotch, pale,
//wheat, belgian, sour, bock, misc
var ipa = [
  'Imperial IPA',
  'American IPA',
  'English IPA',
  'Wet Hop Ale',
  'Imperial Red',
  'Irish Red'
  ];

var strongAle = [
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
  ];

var stoutPorter = [
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
  ];

var lagerPilsner = [
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
  ];

var scotch = [
 'Scottish Export',
 'Scotch Ale'
 ];

var pale = [
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
  ];

var wheat = [
 'Witbier',
 'Wheat Ale',
 'Dunkelweizen',
 'Hefeweizen',
 'Bernsteinfarbenesweizen'
 ];

var belgian = [
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
];

var sour = [
  'BBL Aged Sour',
  'Sour',
  'Brett',
  'Berlinerweisse'
];

var bock = [
  'Doppelbock',
  'Maibock',
  'Bock',
  'Weizenbock',
  'Altbier'
];

var misc = [
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
];


$.ajax({
  url: db + collection + apiKey,
  type:'GET',
  async: true,
  contentType: contentType,
  dataType: dataType,
  success: console.log("Connected to MongoDB")
}).done(function(response) {
  console.log("in the done statement");
  seattleBeer = response.data;
  $(document).ajaxStop(function () {
  $("#loading").hide();
  });


var getBeersByStyleGroup = function(style) {
  var styleArray = [];
  for(var i=0; i < seattleBeer.length; i++) {
    for(var j=0; j < style.length; j++) {
      if(seattleBeer[i].style) {
        if(style[j] == seattleBeer[i].style.shortName) {
          styleArray.push(seattleBeer[i]);
        }
      }
    }
  }
  return styleArray;
};


console.log(getBeersByStyleGroup(ipa));
console.log(getBeersByStyleGroup(sour));





})
  .fail(function(error) {
  console.log(error);
});

// var getBeersByStyleGroup = function(style) {
//   var styleArray = [];
//   for(var i=0; i < seattleBeer.length; i++) {
//     for(var j=0; j < style.length; j++) {
//       if(seattleBeer[i].style) {
//         if(style[j] == seattleBeer[i].style.shortName) {
//           styleArray.push(seattleBeer[i]);
//         }
//       }
//     }
//   }
//   return styleArray;
// };


// console.log(getBeersByStyleGroup(ipa));
// console.log(getBeersByStyleGroup(sour));



});
