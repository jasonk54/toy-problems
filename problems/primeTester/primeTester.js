/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 *
 * Extra credit: Write a function that generates a list of all prime numbers
 * between a user-specified range. If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

//Tests if argument n is a prime number
var primeTester = function(n) {
  if (n === 1 || n !== 2 && n % 2 === 0) { return false }
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

//Returns an array of prime number between n1 to n2
var primeNum = function(n1, n2) {
  var result = [];
  for (var i = n1; i < n2; i++) {
    if (primeTester(i)) {
      result.push(i);
    }
  }
  return result;
};
