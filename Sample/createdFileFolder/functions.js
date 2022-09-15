// Requiring inbuilt module
const fs = require('fs');

// Asynchronous function
fs.readFile('functions.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log("Below is the Data from Asynchronous function call")
  console.log(data);

});
  
// Synchronous function
var data = fs.readFileSync('functions.txt','utf8');
console.log("Below is the Data from Synchronous function call")
console.log(data);