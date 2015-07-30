$(document).ready(function() {


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

var beerHistory = [];

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
      if(ipa) {
        return;
      } else {
        collection = ipaId;
      }
      break;
    case "strongAle":
      if(strongAle) {
        return;
      } else {
      collection = strongAleId;
      }
      break;
    case "stoutPorter":
      if(stoutPorter) {
        return;
      } else {
        collection = stoutPorterId;
      }
      break;
    case "lagerPilsner":
      if(lagerPilsner) {
        return;
      } else {
      collection = lagerPilsnerId;
      }
      break;
    case "scotch":
      if(scotch) {
        return;
      } else {
        collection = scotchId;
      }
      break;
    case "pale":
      if(pale) {
        return;
      } else {
        collection = paleId;
      }
      break;
    case "wheat":
      if(wheat) {
        return;
      } else {
        collection = wheatId;
      }
      break;
    case "belgian":
      if(belgian) {
        return;
      } else {
        collection = belgianId;
      }
      break;
    case "sour":
      if(sour) {
        return;
      } else {
        collection = sourId;
      }
      break;
    case "bock":
      if(bock) {
        return;
      } else {
        collection = bockId;
      }
      break;
    case "misc":
      if(misc) {
        return;
      } else {
      collection = miscId;
    }
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
    // console.log("in done");
    switch(style) {
      case "ipa":
        // console.log("ipa bitches!");
        ipa = response.data;
        // console.log(ipa);
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
    // $(document).ajaxStop(function () {
    //   // $("#loading").hide();
    // });
  })
  .fail(function(error) {
  console.log(error);
  });
};

// var triedHistoryArray = [];  // THIS HAS TO BE THE BEERS ACUTALLY TRIED, NOT JUST SUGGESTED!

// var totalHistoryArray = [] // this includes suggested beers that have not yet been tried IN ADDITION to those in triedHistoryArray

// requestBeersByStyle("ipa");
var getRandomBeerByStyle = function(style){

// requestBeersByStyle(style);

  var workingArray;
    switch(style) {
      case "ipa":
        // console.log("ipa bitches!");
        workingArray = ipa;
        // console.log(ipa);
        break;
      case "strongAle":
        workingArray = strongAle;
        break;
      case "stoutPorter":
        workingArray = stoutPorter;
        break;
      case "lagerPilsner":
        workingArray = lagerPilsner;
        break;
      case "scotch":
        workingArray = scotch;
        break;
      case "pale":
        workingArray = pale;
        break;
      case "wheat":
        workingArray = wheat;
        break;
      case "belgian":
        workingArray = belgian;
        break;
      case "sour":
        workingArray = sour;
        break;
      case "bock":
        workingArray = bock;
        break;
      case "misc":
        workingArray = misc;
        break;
    }
  console.log(workingArray);

  var randomBeerIndex = Math.floor(Math.random() * (workingArray.length));
  if(!localStorage["beerHistory"]) {
    localStorage["beerHistory"] = JSON.stringify([]);
    beerHistory = localStorage["beerHistory"];
  }
  beerHistory = JSON.parse(localStorage["beerHistory"]);
  beerHistory.push(workingArray[randomBeerIndex]);
  localStorage["beerHistory"] = JSON.stringify(beerHistory);
  return workingArray[randomBeerIndex];
};

//Event Listener randomBeer.html buttons//
  $('.randBtn').on('click', function(e){
    $(document).ajaxStart(function() {
      $("#loading").fadeIn(1000);
    });
    requestBeersByStyle(e.target.id);
    setTimeout(function() {
      var beer = getRandomBeerByStyle(e.target.id);
      var beerId = beer.id;
      // $("#loading").hide();
      window.open('beer.html' + '?id=' + beerId, '_self');
      // $(".pageTitle").html(beer.name);

      console.log(beer);
    }, 7000);
  });

  function suggestSimilar(style) {
    // if no beers have been TRIED yet, you need to do that first!
    if (!triedHistoryArray)  {
      console.log("nothing tried yet!");
      alert("you need to try something before we can make any suggestions based on what you've tried!");
      return;
    }

    var randTriedBeerIndex = Math.floor(Math.random() * (triedHistoryArray.length));
    var randomBeerTried = triedHistoryArray[randTriedBeerIndex];// gets random beer that has been tried already (not just suggested)

    var randomBeerIndex2 = Math.floor(Math.random() * (style.length));
    var suggestedBeer  = style[randomBeerIndex2] // get another random beer (from all beers in seattleBeer)

  console.log("suggested beer:")
  console.log(suggestedBeer);

  console.log("Random beer tried:")
  console.log(randomBeerTried);

  for (var i = 0; i < totalHistoryArray.length; i++){
    if (suggestedBeer === totalHistoryArray[i]){
      return suggestSimilar(style) ; //if already been suggested/tried, then find another random beer
    }
  }
  totalHistoryArray.push(suggestedBeer);



console.log("final total beer history array");
console.log(totalHistoryArray);

  }

});






//In Asynch, this will load the gif and allow it to run when ajax call is happening.
  // $(document).ajaxStart(function () {
  //     $("#loading").show();
  // });

  // $(document).ajaxStop(function () {
  //     $("#loading").hide();
  // });

// var db = 'https://api.mongolab.com/api/1/databases/beer-seattle/collections';
// var collection = "/beer/55b7e76e7e1ee7f743ec566e";
// var apiKey = '?apiKey=RjwSNykUJAE_wUTwNZhqr-h0pqxjJzne';
// var contentType = 'application/json';
// var dataType = 'json';
// var seattleBeer;



// $.ajax({
//   url: db + collection + apiKey,
//   type:'GET',
//   async: true,
//   contentType: contentType,
//   dataType: dataType,
//   success: console.log("Connected to MongoDB")
// })

// .done(function(response) {
//   seattleBeer = response.data;
//   $(document).ajaxStop(function () {
//   $("#loading").hide();
//   });

///////// carl's   code  below  ////////






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





// var triedHistoryArray = [];  // THIS HAS TO BE THE BEERS ACUTALLY TRIED, NOT JUST SUGGESTED!

// var totalHistoryArray = [] // this includes suggested beers that have not yet been tried IN ADDITION to those in triedHistoryArray

// var getRandomBeer = function(){
//   var randomBeerIndex = Math.floor(Math.random() * (seattleBeer.length));
//   totalHistoryArray.push(seattleBeer[randomBeerIndex])

//   //THE LINE BELOW IS JUST HERE FOR TESTING... IT SHOULD NOT BE IN THE PERMANENT CODE!!!!
//     triedHistoryArray.push(seattleBeer[randomBeerIndex]) // THE LINE ABOVE IS JUST FOR TESTING... IT SHOULD NOT BE IN THE PERMANENT CODE
//  // puts beer in history of beers that have been suggested or tried
//   console.log("first random beer:");
//   console.log(seattleBeer[randomBeerIndex])

// console.log("total history before suggestion:");
// console.log(totalHistoryArray);

// console.log("tried history array:")
// console.log(triedHistoryArray);
// };


// setTimeout(function() { getRandomBeer(); }, 15000);
// // getRandomBeer();  // needs to be linked to an event listener\


// setTimeout(function() { suggestSimilar(); }, 16000);


// // suggestSimilar();

// function suggestSimilar() {
//   // if no beers have been TRIED yet, you need to do that first!
//   if (!triedHistoryArray)  {
//     console.log("nothing tried yet!")
//     alert("you need to try something before we can make any suggestions based on what you've tried!");
//     return;
//   }

//   var randTriedBeerIndex = Math.floor(Math.random() * (triedHistoryArray.length));
//   var randomBeerTried = triedHistoryArray[randTriedBeerIndex];// gets random beer that has been tried already (not just suggested)

//   var randomBeerIndex2 = Math.floor(Math.random() * (seattleBeer.length));
//   var suggestedBeer  = seattleBeer[randomBeerIndex2] // get another random beer (from all beers in seattleBeer)

//   console.log("suggested beer:")
//   console.log(suggestedBeer.style.shortName);

//   console.log("Random beer tried:")
//   console.log(randomBeerTried.style.shortName);

//   for (var i = 0; i < totalHistoryArray.length; i++){
//     if (suggestedBeer === totalHistoryArray[i]){
//       return suggestSimilar() ; //if already been suggested/tried, then find another random beer
//     }
//   }

//   if (suggestedBeer.style.shortName){
//     console.log("in the first if statement");
//     if (suggestedBeer.style.shortName === randomBeerTried.style.shortName) {
//       console.log("the short names match");
//       totalHistoryArray.push(suggestedBeer); //put the new beer suggestion in tthe list of beers that have bene suggested so far
//     } else {
//         console.log("in the else statement");
//         return suggestSimilar();  //try again if both abv and style don't match!
//     }
//   }

// console.log("final total beer history array");
// console.log(totalHistoryArray);
// }

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
/////// carl's code above ////


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

