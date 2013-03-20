/**
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
 *
 * Ugh, done already? Convert this functional instantiation pattern into a
 * prototypal or pseudoclassical pattern.
 **/


// Creates an instance of bubbleSort. Example usage:
// var bubbleSort = createBubbleSort();
// bubbleSort([2, 1, 3]); // yields [1, 2, 3]
var createBubbleSort = function(array) {
	var counter = 0;
	if (Object.prototype.toString.call(array) === "[object Array]") {
		while (counter < array.length) {
			for (var i = 0; i < array.length; i++) {
				if (array[i] > array[i+1]) {
					var holder = array[i];
					array[i] = array[i+1];
					array[i+1] = holder;
				}
			}
			counter++;
		}
		return array;
	} else {
		throw new TypeError('Need array');
	}
};


