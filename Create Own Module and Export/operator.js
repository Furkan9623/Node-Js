// (1) export variable
// const name = "furkan";
// module.exports = name;

// (2) function exports
// const add = (a, b) => {
//   return a + b;
// };
// module.exports = add;

// (3) multiple function exports
const name = "export multiple function and variable";
const add = (a, b) => {
  return a + b;
};
const substract = (a, b) => {
  return a - b;
};
module.exports = {
  name,
  add,
  substract,
};
