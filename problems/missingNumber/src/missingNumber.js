/**
 * You're given an array every number between 1 and 100,000, except one integer
 * is missing. The numbers are not guaranteed to be consecutive, either! Write a
 * function to detect which number is missing.
 *
 * Extra credit: Refactor your solution to take O(n) time.
 */

var findMissingNumber = function(array) {
  // Your code here
};

/**
 * It's dangerous to go without an array! Use this. You'll need underscore.
 *
 * Generates an array with every number between 1 and 100000, with one random
 * number excluded.
 *
 * @return {Array} An array of numbers.
 */
var testArray = (function() {
  var rand = Math.floor(Math.random() * 100000);
  var result = [];

  for (var i = 1; i <= 100000; i++) {
    i !== rand && result.push(i);
  }

  return _.shuffle(result);
}());
