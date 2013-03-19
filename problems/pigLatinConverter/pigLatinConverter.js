// Write a function that takes an English word as a string and converts it to
// Pig Latin. Your Pig Latin implementation should follow two basic rules: For
// words that begin with consonants, move the first letter to the end of the
// word and add "ay" onto the end. For example:
//
//   "happy" → "appyhay"
//
// For words that begin with vowels, add "ay" to the end of the word.
// For example:
//
//   "anchor" → "anchoray"
//
//
// Extra credit: Make your function accept a string that contains multiple
// words. Don't worry about punctuation.
//
// Extra extra credit: Make your function handle punctuation properly.


var convertToPigLatin = function(string) {
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (var i = 0; i < vowels.length; i++) {
    if (string[0] === vowels[i]) {
      return string = string + 'ay';
    } else {
      return string = string.slice(1) + string[0] + 'ay'
    }
  }
};
