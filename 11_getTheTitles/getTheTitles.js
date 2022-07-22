const getTheTitles = function (books) {
  // let output = [];
  // for (const book of books) {
  //   output.push(book.title);
  // }
  // return output;
  return books.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
