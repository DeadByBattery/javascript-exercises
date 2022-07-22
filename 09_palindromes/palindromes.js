const palindromes = function (str) {
  str = str.toLowerCase().replace(/[^a-z]/gi, "");
  const rev_str = str.split("").reverse().join("");
  return str === rev_str;
};

// Do not edit below this line
module.exports = palindromes;
