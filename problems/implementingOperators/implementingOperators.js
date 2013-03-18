// Implement multiply, divide, and modulo using only the addition and
// subtraction operators.
//
// Step 2: Make your functions produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply accept more than two arguments.
//
// Terror mode: Re-implement all three functions using only bitwise operators.

var multiply = function(x, y) {
	if (x === 1 && y === 1) {
		return x;
	}
	var result = 0;
	for (var i = 0; i < x; i++) {
		result += y;
	}
	return result;
};

var divide = function(x, y) {
	if (x === 1 && y === 1) {
		return x;
	}
	if (x === 0 || y === 0) {
		return 0;
	}
	var result = 1;
	for (var i = y; i < x; i+= y) {
		result++;
	}
	return result;
};

var modulo = function(x, y) {
	var temp = multiply(divide(x,y), y);
	var z = temp - y;
	if (temp > x) {
		var result = x - z;
	} else {
		return 0;
	}
	return result;
};
