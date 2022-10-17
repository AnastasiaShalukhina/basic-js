const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arrWithUniqueElements = new Set([]);
  let arrWithAllElements = [];
  let resultObj = {};
  let key = "";
  for (let i = 0; i < domains.length; i++) {
    let elementArr = domains[i].split(".").reverse();
    for (let j = 0; j < elementArr.length; j++) {
      arrWithUniqueElements.add(elementArr[j]);
      arrWithAllElements.push(elementArr[j]);
    }
  }
  for (let word of arrWithUniqueElements) {
    key = key + "." + word;
    let count = 0;
    for (let elem of arrWithAllElements) {
      if (elem === word) {
        count++;
      }
    }
    resultObj[key] = count;
  }
  return resultObj;
}

module.exports = {
  getDNSStats,
};
