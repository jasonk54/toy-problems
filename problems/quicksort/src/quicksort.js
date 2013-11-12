/**
 * Your mission: Implement quicksort!
*/

var quicksort = function(arr) {
	// Base case
	if (arr.length <= 1) return arr;

	var pivotPoint = Math.floor((arr.length - 1) / 2),
		pivotValue = arr[pivotPoint],
		less = [], 
		more = [];

	arr.splice(pivotPoint, 1);
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < pivotValue) {
			less.push(arr[i]);
		} else {
			more.push(arr[i]);
		}
	}
	return (quicksort(less)).concat([pivotValue], quicksort(more));
}
