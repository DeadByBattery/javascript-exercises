const removeFromArray = function (from_array, ...selectors) {
  return from_array.filter((item) => !selectors.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
