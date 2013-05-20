/**
 * Implement a function that takes a URL and a callback and makes a JSONP
 * request. Call your function three times in a row, appending the results to
 * #container. Ensure that the random number returned by each JSONP request is
 * unique.
 *
 * Use this URL as your sample endpoint:
 *
 * http://toy-problems.hackreactor.com/jsonparty
 */

var jsonpRequest = function(url, callback) {
  $.ajax({
    url: url,
    dataType: "jsonp",
    context: document.body,
    success: function(data) {
      callback(data);
    }
  });
};
var url = 'http://toy-problems.hackreactor.com/jsonparty';
$(function() {
  var i = 0;
  while (i < 3) {
    jsonpRequest(url , function(data) {
      for (key in data) {
        var list = "<li>" + key + " : " + data[key] + "</li>";
        $('#container').append(list);
      }
    });
    i++;
  };
})
