/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing only the characters found in both strings, in the order that
 * they appeared in `a`. Write a version which is order N-squared and one which
 * is order N.
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonStringFinder = function(string1, string2) {
  // Used Underscore.
  var strSpl1 = string1.split('');
  var strSpl2 = string2.split('');
  var result = [];

  for (var i = 0; i < strSpl1.length; i++) {
  	if (_.contains( strSpl2, strSpl1[i] ) && !_.contains(result, strSpl1[i]) && strSpl1[i] !== ' ') {
  			result.push(strSpl1[i]);
  	}
  }
  return result.join('')
};


	// N-squared without Underscore.  Did not check for duplicate characters.
	for (var i = 0; i < strSpl1.length; i++) {		// Iterates strSpl1
		for (var j = 0; i < strSpl2.length; i++) {
			if (strSpl1[i] === strSpl2[j] && strSpl1[i] !== ' ') {
				result.push(strSpl1[i]);
			}
		}
	}
	return result.join('');