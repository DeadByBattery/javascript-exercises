const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (array_x) {
  let previousSum = 0;
  for (const item of array_x) {
    previousSum += item;
  }
  return previousSum;
};

const multiply = function (array_x) {
  let previousProd = 1;
  for (const item of array_x) {
    previousProd *= item;
  }
  return previousProd;
};

const power = function (x, n) {
  return x ** n;
};

const factorial = function (x) {
  if (x === 0) return 1;
  return x * factorial(x - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
