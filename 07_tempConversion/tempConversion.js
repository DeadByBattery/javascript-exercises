const ftoc = function (f) {
  const celcius = (f - 32) * 0.5556;
  return Number(celcius.toFixed(1));
};

const ctof = function (c) {
  const fahrenheit = c * 1.8 + 32;
  return Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
