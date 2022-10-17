const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arrWithLetters = str.split("");
  let result = "";
  let count = 1;
  for (let i = 0; i < arrWithLetters.length; i++) {
    if (i !== arrWithLetters.length - 1) {
      if (arrWithLetters[i] === arrWithLetters[i + 1]) {
        count++;
      } else {
        if (count > 1) {
          result = result + count + arrWithLetters[i];
          count = 1;
        } else {
          result = result + arrWithLetters[i];
          count = 1;
        }
      }
    } else {
      if (arrWithLetters[i] === arrWithLetters[i - 1]) {
        count > 1
          ? (result = result + count + arrWithLetters[i])
          : (result = result + arrWithLetters[i]);
      } else {
        console.log("hi");
        result = result + arrWithLetters[i];
      }
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};
