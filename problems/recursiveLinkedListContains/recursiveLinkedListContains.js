var makeLinkedList = function(){
  var head, tail;
  return {
    add: function(value){
      var newTail = makeNode(value);
      if(tail){
        tail.next = newTail;
      }
      tail = newTail;
      head = head || tail;
    },
    contains: function(value){
      // use recursion to solve this problem
    }
  };
}

var makeNode = function(value){
  return {
    next: null,
    value: value
  };
};
