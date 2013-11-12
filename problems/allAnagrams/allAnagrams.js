/**
 * Given an input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 */

var result = [], usedChars = [];

var allAnagrams = function(str) {
	var	str = str.split(''),
		ch;

	for (var i = 0; i < str.length; i++) {

		// Plucks one character at the given index
		ch = str.splice(i, 1);
		console.log('str splice beg: ' + ch)	
		// Push char to usedChars
		usedChars.push(ch);

		// If string length is 0, push usedChars into result array
		if (str.length === 0) {
			result.push(usedChars.join(''));
		}

		allAnagrams(str.join(''));

		str.splice(i, 0, ch);
		usedChars.pop();
	}
	return result;
}
