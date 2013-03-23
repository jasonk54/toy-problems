/**
 * Given a function which produces a random integer in the range 1 to 5, write
 * a function which produces a random integer in the range 1 to 7.
 */

var random1to5 = function() {
 return Math.ceil(Math.random()*5);
};

var random1to7 = function() {
	var matrix = [
  	[1,1,1,2,2],
	  [2,3,3,3,4],
  	[4,4,5,5,5],
	  [6,6,6,7,7],
  	[7,0,0,0,0]
	];	
	return matrix[random1to5()-1][random1to5()-1] || random1to7();
};




