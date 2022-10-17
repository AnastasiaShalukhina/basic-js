const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let positionToSlice = email.lastIndexOf("@");
  let domainInitial = email.slice(positionToSlice + 1);
  let domain = "";
  if (domain[0] === ".") {
    domain += domainInitial.slice(1);
  } else {
    domain += domainInitial;
  }
  return domain;
}

module.exports = {
  getEmailDomain,
};
