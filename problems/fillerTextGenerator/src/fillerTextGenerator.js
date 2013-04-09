/**
 * Today's toy problem is to write a function that can create filler text, i.e.
 * text that doesn't actually mean anything, but from a distance could plausibly
 * look like real language.
 *
 * Implement these features in order:
 * - The argument to function is the number of words the function should return.
 * - The text is made up of sentences with 3-8 words each.
 * - Each word is made up of 1-12 random characters from A-Za-z.
 * - Sentences have first word capitalized and a period at the end.
 * - After each sentence there should be a 15% chance of a newline.
 * - Instead of periods after each sentence, introduce other punctuation marks
 *   (e.g. question marks and exclamation marks).
 * - Put some of the words in "quotes." People love "quotes."
 *
 * If you finish all of this, look into replacing your random letters with
 * pseudo-natural language.
 */

var randomNumGenerator = function(min, max) {
  return Math.floor((Math.random() * max) + min);
}

var generateFillerText = function(wordCount) {
  var chars = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 
    'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z'
    ];
  _.each(chars, function(ele) {
    chars.push(ele.toUpperCase());
  });

  var result = [];
  var words = 0;

  while (words < wordCount) {
    var temp = [];
    for (var i = 0; i < randomNumGenerator(1,12); i++) {
      temp.push(chars[randomNumGenerator(0, chars.length-1)]);
    }
    result.push(temp.join(''));
    words++;
  }
  result = result.join(' ');
  result = result.charAt(0).toUpperCase() + result.slice(1);
  return result;
};
