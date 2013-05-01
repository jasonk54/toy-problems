/**
 * Create a hash table with set, get, and remove methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as 3/4th of the slots in the storage array are occupied.
 * Resize by half whenever utilization drops below 1/4.
 */

var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 4;

  result.set = function(key, value){
  };

  result.get = function(key){
  };

  result.remove = function(key){
  };

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
