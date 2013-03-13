// An easy way to reverse an array is by building a new array of the same size but in the opposite order
// However, this requires as much extra memory as the original array takes up.
// In-place reversal is a technique that requires no extra space. Write an in-place array reversal algorithm that
// requires O(1) time

var reverseArray = function(array){
  for (var i = 0; i < array.length/2; i++){
    var hold = array[i];// last element
    array[i] = array[(array.length  - 1 - i];
    array[array.length-i-1] = hold;
  }
};
