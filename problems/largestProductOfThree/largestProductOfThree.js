/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
  var larger = [];
  array.sort(function(a,b) { return a-b; });
  if ((array[0] < 0) && (array[1] < 0) && (-array[0] > array[array.length -2]) && (-array[1] > array[array.length -3])) {
    var result = array[array.length-1] * array[0] * array[1];
  } else {
    var result = array[array.length-1] * array[array.length-2] * array[array.length-3];
  }
  return result;
};

if (largestProductOfThree([6, 8, 1, 2, 4, 9, 8]) !== 576) {
  throw new Error("Sorry, that's not quite right. Please try again.");
}
