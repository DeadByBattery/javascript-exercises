const fibonacci = function (nterms) {
  let n1 = 0;
  let n2 = 1;
  let count = 1;
  nterms = parseInt(nterms);

  if (nterms < 0) return "OOPS";
  if (nterms === 1) return 1;
  while (count < nterms) {
    nth = n1 + n2;
    n1 = n2;
    n2 = nth;
    count++;
  }
  return nth;
};

// Do not edit below this line
module.exports = fibonacci;
