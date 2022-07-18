const sumAll = function (start, end) {
  if (start < 0 || end < 0) return "ERROR";
  if (typeof start != "number" || typeof end != "number") return "ERROR";
  if (start > end) {
    const temp = end;
    end = start;
    start = temp;
  }

  let result = 0;
  for (let i = start; i <= end; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
