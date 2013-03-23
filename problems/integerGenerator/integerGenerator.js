/**
 * Given a function which produces a random integer in the range 1 to 5, write
 * a function which produces a random integer in the range 1 to 7.
 */

var random1to5 = function() {
 return Math.ceil(Math.random()*5);
};

var random1to7 = function() {
  var oneTofive = random1to5();
  return Math.floor(oneToFive * 1.5);
};

