// Using regular expressions, write a method to replace all spaces in a string
// with %20. For example, the string:
//
//   "Les Cousins Dangereux"
//
//  Would become:
//
//   "Les%20Cousins%20Dangereux"
//
//
// Extra credit: Rewrite your function to not use regular expressions.
//
// Moar credits: Make your function convert the entire string to HTML escape
// codes. (Pro tip: JavaScript's charCodeAt() method will be helpful here.)
//
// JavaScript's character codes should largely match up with HTML's entity
// codes. You can find a list of those here:
//
//   http://www.degraeve.com/reference/urlencoding.php
//

var htmlEscaper = function(string) {
	return string.replace(/\s/g, '%20');
};



// for (var i = 0; i < string.length; i++) {
// 	if (string[i] === ' ') {
	// 		console.log('found space')
	// 		string[i] = string[i].replace(' ', '%20');
	// 	}
	// 	return string;
	// 	}
	// };
