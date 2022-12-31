// (1) import variable from operator.js
// const name = require("./operator");
// console.log(name);

// (2) import function from operator.js
const { add, substract, name } = require("./operator");
console.log(name);
console.log(add(10, 10));
console.log(substract(20, 10));
