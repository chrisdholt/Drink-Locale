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
})

.done(function(response) {
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

})
  .fail(function(error) {
  console.log(error);
});

//////// Craig's random beer code below /////
// var ipaGroup = getBeersByStyleGroup(ipa)
// var strongAleGroup =getBeersByStyleGroup(strongAle)
// var stoutPorterGroup = getBeersByStyleGroup(stoutPorter)
// var lagerPilsnerGroup = getBeersByStyleGroup(lagerPilsner)
// var scotchGroup = getBeersByStyleGroup(scotch)
// var paleGroup = getBeersByStyleGroup(pale)
// var wheatGroup = getBeersByStyleGroup(wheat)
// var belgianGroup = getBeersByStyleGroup(belgian)
// var sourGroup = getBeersByStyleGroup(sour)
// var bockGroup = getBeersByStyleGroup(bock)
// var miscGroup = getBeersByStyleGroup(misc)





var triedHistoryArray = [];  // THIS HAS TO BE THE BEERS ACUTALLY TRIED, NOT JUST SUGGESTED!

var totalHistoryArray = [] // this includes suggested beers that have not yet been tried IN ADDITION to those in triedHistoryArray

var getRandomBeer = function(){
  var randomBeerIndex = Math.floor(Math.random() * (seattleBeer.length));
  totalHistoryArray.push(seattleBeer[randomBeerIndex])

  //THE LINE BELOW IS JUST HERE FOR TESTING... IT SHOULD NOT BE IN THE PERMANENT CODE!!!!
    triedHistoryArray.push(seattleBeer[randomBeerIndex]) // THE LINE ABOVE IS JUST FOR TESTING... IT SHOULD NOT BE IN THE PERMANENT CODE
 // puts beer in history of beers that have been suggested or tried
  console.log("first random beer:");
  console.log(seattleBeer[randomBeerIndex])

console.log("total history before suggestion:");
console.log(totalHistoryArray);

console.log("tried history array:")
console.log(triedHistoryArray);
};


setTimeout(function() { getRandomBeer(); }, 15000);
// getRandomBeer();  // needs to be linked to an event listener\


setTimeout(function() { suggestSimilar(); }, 16000);


// suggestSimilar();

function suggestSimilar() {
  // if no beers have been TRIED yet, you need to do that first!
  if (!triedHistoryArray)  {
    console.log("nothing tried yet!")
    alert("you need to try something before we can make any suggestions based on what you've tried!");
    return;
  }

  var randTriedBeerIndex = Math.floor(Math.random() * (triedHistoryArray.length));
  var randomBeerTried = triedHistoryArray[randTriedBeerIndex];// gets random beer that has been tried already (not just suggested)

  var randomBeerIndex2 = Math.floor(Math.random() * (seattleBeer.length));
  var suggestedBeer  = seattleBeer[randomBeerIndex2] // get another random beer (from all beers in seattleBeer)

  console.log("suggested beer:")
  console.log(suggestedBeer.style.shortName);

  console.log("Random beer tried:")
  console.log(randomBeerTried.style.shortName);

  for (var i = 0; i < totalHistoryArray.length; i++){
    if (suggestedBeer === totalHistoryArray[i]){
      return suggestSimilar() ; //if already been suggested/tried, then find another random beer
    }
  }

  if (suggestedBeer.style.shortName){
    console.log("in the first if statement");
    if (suggestedBeer.style.shortName === randomBeerTried.style.shortName) {
      console.log("the short names match");
      totalHistoryArray.push(suggestedBeer); //put the new beer suggestion in tthe list of beers that have bene suggested so far
    } else {
        console.log("in the else statement");
        return suggestSimilar();  //try again if both abv and style don't match!
    }
  }

console.log("final total beer history array");
console.log(totalHistoryArray);
}

// console.log("total history after suggestion:");
// console.log(totalHistoryArray);



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
