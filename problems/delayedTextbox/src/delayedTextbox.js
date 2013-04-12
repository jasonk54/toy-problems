/**
 * We have a textbox where we get the info with the following code:
 *
 *   var tb = $(".textbox");
 *
 * We want to get the text of that box, but only 600 ms after the person stops
 * typing in that box. How would you implement it?
 */

$(document).ready(function(){
  var timer;
  var typingInterval = 3600;

  // Version 1: Assumes user is finished with typing if 5 secs lapse between key strokes
  $('.textbox').keyup(function() {
    clearTimeout(timer);
    if ($('.textbox').val) {
      timer = setTimeout(doneTyping, typingInterval);
    }
  });

  var doneTyping = function() {
    var text = $('.textbox').val();
    console.log(text);
  };

  // // Version 2: Assumes that when user clicks, or moves, away from the text field, user has stopped typing.
  // $('.textbox').blur(function() {
  //   setTimeout(doneTyping, 600);
  // });
});
