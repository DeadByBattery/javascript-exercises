const reverseString = function (str) {
  // let string_to_array = [];
  // let array_to_string = "";
  // for (const char of str) {
  //   string_to_array.push(char);
  // }
  // string_to_array.reverse();
  // for (const item of string_to_array) {
  //   array_to_string += item;
  // }
  // return array_to_string;
  return str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
