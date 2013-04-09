/**
 * Write a function that, given an email address, will return true if the
 * email address is valid and false if it's not.
 *
 * Extra credit: There are some commented lines in spec/spec.js. Uncomment
 * them.
 */

var emailValidator = function(address) {
  var regex = /[^.](\"*)@(.+\.\w{2,}$)/;
  var result = address.search(regex);
  if (result > -1) {
    return true;
  } else {
    return false;
  }
};
