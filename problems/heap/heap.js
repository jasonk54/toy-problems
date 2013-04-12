/**
 * A heap is a special kind of tree in which a parent node is ordered only in
 * respect to its immediate children. Unlike the binary search tree you may have
 * implemented, where the entire tree is ordered, in a heap the only order
 * guaranteed is between a node and its parent.
 *
 * Implement a binary max heap, where the top (root) node of the heap is the maximum
 * value in the heap. Again, each node's value should be less than its parent,
 * and each node should have only two children maximum.
 */


// Your code goes in here. Implement the methods, add new methods, and create
// additional helper functions as you see fit. You'll need to add a storage
// container to store children in, too.
//
// Extra credit: Implement heap.findMax() and heap.findMin(). What's the
// algorithmic time of each?
//
// Extra extra credit: Implement standard tree methods like contains, traverse,
// etc.

var makeBinaryHeap = function() {
  var heap = {};

  var storage = [];

  heap.insert = function(item) {
    // Implement me!
  };

  return heap;
};
