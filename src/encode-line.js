const { NotImplementedError } = require('../extensions/index.js');

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
  let arr = str.split('');
  let res = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += 1;
    if (arr[i] === arr[i + 1]) continue;
    if (count === 1) {
      res.push(arr[i]);
    } else {
      res.push(count, arr[i]);
    }
    count = 0;
  }
  return res.join('');
}

module.exports = {
  encodeLine
};
