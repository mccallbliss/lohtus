// Detect which browser prefix to use for the specified CSS value
// (e.g., background-image: -moz-linear-gradient(...);
//        background-image:   -o-linear-gradient(...); etc).
//
function getCssValuePrefix(name, value) {
    var prefixes = ['', '-o-', '-ms-', '-moz-', '-webkit-'];

    // Create a temporary DOM object for testing
    var dom = document.createElement('div');

    for (var i = 0; i < prefixes.length; i++) {
        // Attempt to set the style
        dom.style[name] = prefixes[i] + value;

        // Detect if the style was successfully set
        if (dom.style[name]) {
            return prefixes[i];
        }
        dom.style[name] = '';   // Reset the style
    }
}

// Run this when the page first loads
var gradientPrefix = getCssValuePrefix('backgroundImage',
                                       'linear-gradient(left, #fff, #fff)');

// Setting the gradient later on
dom.style.backgroundImage = gradientPrefix + 'linear-gradient('
        + orientation + ', ' + colorOne + ', ' + colorTwo + ')';