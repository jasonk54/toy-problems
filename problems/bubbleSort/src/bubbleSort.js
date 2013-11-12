
// Creates an instance of bubbleSort. Example usage:
// var bubbleSort = createBubbleSort();
// bubbleSort([2, 1, 3]); // yields [1, 2, 3]

var bubbleSort = function(arr) {
	var counter = 0;
	while(counter < arr.length) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] > arr[i+1]) {
				var temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp
			}
		}
		counter++;
	}
	return arr;
}