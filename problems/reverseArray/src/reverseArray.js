/**
 * Given an arbitrary input array, write a function that reverses the contents
 * of the array. Don't use the native Array.prototype.reverse() method.
 *
 * Extra Credit: Don't use an extra array.
 *
 *
 * Here's a sample input to get you going:
 *
 *   [1, 8, 39, null, 2, 9, 'bob']
 */

var reverseArray = function(array) {
  var length = array.length;
  for (var i = 0; i < length / 2; i++) {
    var temp = array[i];
    array[i] = array[length - i - 1];
    array[length - i - 1] = temp;
  }
  return array;
};
