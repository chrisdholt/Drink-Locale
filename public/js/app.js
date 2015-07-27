
// var request = $.ajax({
//     url: "localhost:5000/proxy.php",
//     data: {requrl: "http://api.brewerydb.com/v2/beer/oeGSxs?key=d494efd8b968c2b377afa7208751cd3c" }
// });

// request.done(function(res) {
//     console.log(res);
// });

// request.fail(function(res) {
//   console.log(res);
// });
require(["../../server.js"], function("../../server.js") {
  console.log("hello");
  getBeer();

});


// var serverImport = require("../../server.js");
// console.log("in between the lines");
// serverImport.getBeer();
