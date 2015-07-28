
var yes = document.getElementById('confirmY');
yes.addEventListener('click', function(){
  ageVer = document.getElementById('ageVerWrap');
  ageVer.className = 'hide'; //hides the ageVer section if they say they are above 21
});

var no = document.getElementById('confirmNot');
no.addEventListener('click', function(){
  window.open("http://www.disney.com","_self"); //opens disney.com if they say they are not 21
});

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
console.log(beerArray[beerIndex].brewery);



