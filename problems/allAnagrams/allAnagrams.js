/**
 * Given an input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */
string = 'abc'
var allAnagrams = function(string) {
  var result = [];
  string = string.split('');
  for (var i = 0; i < string.length; i++)

  var temp = string.shift();
  result.push(string.sort() + temp);
  console.log(result)
}

