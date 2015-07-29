  (function() {
if (!localStorage['ageCheck']) {
       localStorage['ageCheck'] = 'yes';
       checkAge();
   }
})();

function checkAge() {
  var ageVer = document.getElementById('ageVerWrap');
  ageVer.className = 'showAge';

  var yes = document.getElementById('confirmY');
  yes.addEventListener('click', function(){
    ageVer.className = 'hideAge'; //hides the ageVer section if they say they are above 21
  });

  var no = document.getElementById('confirmNot');
  no.addEventListener('click', function(){
    window.open("http://www.disney.com","_self"); //opens disney.com if they say they are not 21
  });
}

/// removed Kasim's code (beerARray and Beer Constructor)  because  it is no longer needed - all the beers are stored in the variable  seattleBeer
