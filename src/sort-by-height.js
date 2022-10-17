const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrToSort = [];
  let arrWithInd = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arrToSort.push(arr[i]);
    } else {
      arrWithInd.push(i);
    }
  }

  arrToSort.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === arrWithInd[0]) {
      result.push(-1);
      arrWithInd.splice(0, 1);
    } else {
      result.push(arrToSort[0]);
      arrToSort.splice(0, 1);
    }
  }
  return result;
}

module.exports = {
  sortByHeight,
};
