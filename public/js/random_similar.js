var beerArray = [];
var Beer = function(name, abv, description, ibu, style, brewery, labelurl){
  this.name = name;
  this.abv = abv;
  this.description;
  this.ibu = ibu;
  this.style = style;
  this.brewery = brewery;
  this.labelurl = labelurl;
};

beerArray.push(new Beer('beer1', 1, 'hoppy2', 100, 'ipa', 'brewery1','/beer1.jpg'));
beerArray.push(new Beer('beer2', 100, 'yummy', 0, 'porter', 'brewery2','/beer2.jpg'));
beerArray.push(new Beer('beer3', 10, 'good', 14, 'ale','brewery3','/beer3.jpg'));
beerArray.push(new Beer('beer4', 5, 'nice smell', 5, 'blonde', 'brewery4','/beer4.jpg'));

var beerIndex = Math.floor(Math.random() * (beerArray.length));
console.log(beerArray[beerIndex].name);


////// Kasim's code above, Craig's below

var triedHistoryArray = [];  // THIS HAS TO BE THE BEERS ACUTALLY TRIED, NOT JUST SUGGESTED!

var totalHistoryArray = [] // this includes suggested beers that have not yet been tried IN ADDITION to those in triedHistoryArray


function suggestSimilar() {
  // if no beers have been TRIED yet, you need to do that first! so this will suggest a random beer instead if none tried yet
  if triedHistoryArray = [] {
    return beerArray[beerIndex];  //get random beer
  }
  var randBeer = Math.floor(Math.random() * (triedHistoryArray.length);
  var randomBeerTried = triedHistoryArray[randBeer];// gets random beer that has been tried already (not just suggested)

  var suggestedBeer  = beerArray[beerIndex] // get another random beer (from all beers in beerArray)

  for (var i = 0; i < totalHistoryArray.length; i++){
    if (suggestedBeer === totalHistoryArray[i]){
    return suggestSimilar() ; //if already been suggested/tried, then find another random beer
    }
  }

  if (suggestedBeer.style === randomBeerTried.style) && ((randomBeerTried.abv - 0.5) <= suggesteBeer.abv <= (randomBeerTried.abv + 0.5)) {     //run this if suggestedBeer style  AND abv (+/- 0.5%) matchs the style AND abv of the already-tried beer

    totalHistoryArray.push(suggestedBeer); //put the new beer suggestion in tthe list of beers that have bene suggested so far

   ///////CODE TO ADD SUGGESTED BEER TO INNERHTML OR WHATEVER GOES HERE/////////////////////

    } else {
    return suggestSimilar();  //try again if both abv and style don't match!
  }







