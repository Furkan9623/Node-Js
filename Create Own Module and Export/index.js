// (1) import variable from operator.js
// const name = require("./operator");
// console.log(name);

// (2) import function from operator.js
const { add, substract } = require("./operator");
console.log(add(10, 10));
console.log(substract(20, 10));

const fs = require("fs");
fs.unlinkSync("README.md");
