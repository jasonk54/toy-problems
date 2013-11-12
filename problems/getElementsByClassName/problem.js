// The browser comes with a utility function getElementById that returns an element whose id matches the input.
// Write a function that returns an array of all nodes that match a particular class name
// To get started, you may use jQuery, but try to refactor it out once you have it working

var getElementsByClassName = function(className){
	var nodeArr = [];

	var tree = function(node) {
		var node = node || document.getElementsByTagName('body')[0];
		if (node.hasChildNodes()) {
			var currentNode = node.firstChild;
			while (currentNode) {
				if (currentNode.nodeType === 1 && currentNode.attributes.class) {
					if (currentNode.attributes.class.value === className) {
						nodeArr.push(currentNode)
					}
				}
				currentNode = currentNode.nextSibling;
			}
		}
	}
	tree();
	return nodeArr;
};
