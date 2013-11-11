/* 
	Linked List with add, remove, get methods
*/

function LinkedList() {
  this.head = null;
  this.count = 0;
}

// Add data
LinkedList.prototype.add = function(value) {
	var node = {
		value : value,
		next : null
	},
	current;

	if (this.head === null) {
		this.head = node;
	} else {
		current = this.head;
		while(current.next) {
			current = current.next;
		}
		current.next = node
	}
	this.count++;
	return node;
};

// Retrieve data by the index (0 based index)
LinkedList.prototype.get = function(index) {
	var current = this.head,
		index,
		i = 0;

	if (index >= 0 && index < this.count) {
		while (i++ < index) {
			current = current.next;
		}
		return current.value;
	} else {
		return null;
	}
};

// Remove data by its node or index
LinkedList.prototype.remove = function(node) {
	var current = this.head;

	if (typeof node === "number") {
		// If index is used
		var index = node,
			i = 0,
			previous;

		if (this.get(index)) {
			if (index === 0) {
				this.head = current.next;
				this.count--;
			} else {
				while (i++ < index) {
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
				this.count--;
				return current.value;
			}
		} else {
			return null;
		}
	} else {

		// If object is used for removal
		if (current) {
			if (current === node) {
				this.head = this.current.next;
				node.next = null;
				this.count--;
				return current.value;
			}
			while (current.next) {
				if (current.next === node) {
					current.next = node.next;
					this.count--;
					return current.value;
				}
				current = current.next;
			} 
		}
	}
};

