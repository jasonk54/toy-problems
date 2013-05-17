/**
 * Write a stack using your preferred instantiation pattern. Once you're done,
 * implement a queue using two stacks.
 */

// Replace these functions with your code.
var stack = function() {
  var makeStack = Object.create(stackPrototype);
  makeStack.storage = [];
  makeStack._size = 0;
  return makeStack;
};

var stackPrototype = {};

stackPrototype.add = function(el) {
  this.storage.push(el);
  this._size++;
};

stackPrototype.remove = function() {
  if (this._size > 0) {
    var temp = this.storage[this._size];
    this.storage.pop();
    this._size--;
    return temp;
  }
};

stackPrototype.size = function() {
  return this._size;
};

// Use two of your stacks to implement this

var queue = function() {
  var makeStack = stack();
  var makeQueue = {};
  makeQueue._size = 0;
  makeQueue._counter = 0

  makeQueue.add = function(el) {
    makeStack.add(el);
    makeQueue._size++;
  };

  makeQueue.remove = function() {
    if (makeStack.size > 0) {
      for (var i = makeStack.size - 1; i < makeStack.size; i--) {
        var stack2 = stack();
        stack2.add = makeStack[i];
      }
      var temp = makeStack[makeQueue._counter];
      stack2.pop();
      return temp;
    }
  };

  makeQueue.size = function() {
    return makeQueue._size - makeQueue._counter;
  };
};
