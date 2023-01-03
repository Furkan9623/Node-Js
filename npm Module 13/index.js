const fs = require("fs");

// fs.writeFileSync("README.md", "npm module");
// fs.appendFileSync("README.md", " Hello World");

var validator = require("validator");
var ans = validator.isEmail("furkan@gmail.com"); //=> true
console.log(ans);
var ansFalse = validator.isEmail("furkan.com");
console.log(ansFalse);
