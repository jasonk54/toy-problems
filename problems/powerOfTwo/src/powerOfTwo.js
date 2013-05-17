/**
 * Write a function that accepts a number `n` as its input and returns a boolean
 * value representing whether or not `n` is a power of 2.
 *
 * If your answer is iterative, try solving it using recursion (and vice versa).
 * Once you've solved the problem both ways, see if you can devise a clever way
 * of solving the problem using bitwise operators.
 */

var isPowerOfTwo = function(n) {
  if (n === 0) return false;
  while (n % 2 === 0) {
    n = n / 2;
  }
  if (n > 1) return false;
  return true;
};

var isPowerOfTwo = function(n) {
  if (n === 0) return false;
  if (n % 2 === 0) {
    return isPowerOfTwo(n/2);
  }
  if (n > 1) {
    return false;
  }
  return true;
};