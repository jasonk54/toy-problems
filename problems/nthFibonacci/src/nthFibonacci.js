
var nthFibonacci = function(n) {
  if (n === 0) {
    return n;
  }
  return n < 4 ? 1 : nthFibonacci(n-1) + nthFibonacci(n-2);
};

// using memoize
// var nthFibonacci = _.memoize(function(n) {
//   if (n === 0) {
//     return n;
//   }
//   return n < 4 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
// });