// $(document).ready(function() {
//   $('#yes').click(function(){
//     $('#ageVer').addClass('hide');
//     console.log('yes');
//   });
//   $('#no').click(function(){
//     window.open("http://www.disney.com","_self");
//     console.log('no');
//   });
// });
//same as below code but in jquery but not working


//vanilla js way to listen for yes/no
var yes = document.getElementById('yes');
yes.addEventListener('click', function(){
  ageVer = document.getElementById('ageVer');
  ageVer.className = 'hide'; //hides the ageVer section if they say they are above 21
});

var no = document.getElementById('no');
no.addEventListener('click', function(){
  window.open("http://www.disney.com","_self"); //opens disney.com if they say they are not 21
});