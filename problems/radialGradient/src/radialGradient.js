// Create a gradient without using CSS3 gradients (do not use the radial-
// gradient CSS property). You'll do this by accepting two RGB "stop" values;
// these represent the starting and ending color of the gradient.
//
// Your gradient should insert a series of divs into the #gradient element in
// the provided HTML file. You can assume that the container will always be a
// perfectly square element.
//
// Hint: To create circles, you may want to look into the border-radius css
// property.
//
//
// Extra credit: Refactor your solution to use a pseudoclassical or prototypal
// pattern and make multiple gradients appear on your screen.
//
// Moar credits plz:
// * Add a .clear() method to your gradient that empties the gradient container.
//   Call this every time you draw your gradient.
// * Make your solution handle more than two stop values.


var createGradient = function(elementId, stops) {
  var gradient = {};
  gradient._stops = stops || [];
  gradient._element = $('#' + elementId);

  // Creates the gradient out of a list of stops and appends it to the stage.
  // Returns the completed element.
  gradient.draw = function() {
    var count = 50;
    var $width = parseInt($('#gradient').css('width'))  //returns int.  Must add 'px'.
    while (count < $width) {
    	// Loop through the current div #gradient and make another 
    	// div within the #gradient.  The size of the new gradient 
    	// should be #gradient width and height - 50.
    	$('#gradient').append('<div></div>');

    }
  };

  return gradient;
};
