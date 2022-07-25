const alphabet = "abcdefghijklmnopqrstuvwxyz";

const caesar = function (message, shift) {
  let encrypted_raw = "";
  let output = "";

  for (let letter of message) {
    letter = letter.toLowerCase();

    if (alphabet.includes(letter)) {
      let index = alphabet.indexOf(letter);
      index = (index + shift) % 26;

      if (index < 0) {
        index = index + 26;
      }

      encrypted_raw += alphabet[index];
    } else {
      encrypted_raw += letter;
    }
  }

  const input_msg = arguments[0];

  for (const char_index in input_msg) {
    if (input_msg[char_index] === input_msg[char_index].toUpperCase()) {
      output += encrypted_raw[char_index].toUpperCase();
    } else {
      output += encrypted_raw[char_index];
    }
  }

  return output;
};

// Do not edit below this line
module.exports = caesar;
