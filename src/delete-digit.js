const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrWithDigits = n.toString().split("");
  let arrWithCuttedNum = [];
  for (let i = 0; i < arrWithDigits.length; i++) {
    let arrWithDigitsCopy = arrWithDigits.slice(0);
    arrWithDigitsCopy.splice(i, 1);
    let strCuttedNumber = arrWithDigitsCopy.join("");
    arrWithCuttedNum.push(strCuttedNumber);
  }
  arrWithCuttedNum.sort((a, b) => b - a);
  let biggerNum = +arrWithCuttedNum[0];
  return biggerNum;
}

module.exports = {
  deleteDigit,
};
