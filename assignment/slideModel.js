/* ================================
Week 6 Assignment: Slide Model
================================ */

/** Here's a simple 'model' of a slide.
 *  It tracks the slide's index and the title we want in our HTML
 */
var slideExample = {
  slideNumber: 1,
  title: "My first slide",
  filter: function(geojsonFeature) { return true }
};

/** Here's the simplest implementation I could come up with for
 * representing a deck of slides (nothing exotic is necessary!)
 */
var slideDeck = [slideExample1, slideExample2, slideExample3]

/* my slides descriptions
This is just my first thoughts of what the slides might look like. Probably will revise them later
*/
var slide1 = {
  slideNumber: 1,
  title: "Beijing Houseprice"
  filter: // shows the locations of all homesale places, add popup showing brief information of each location
}

var slide2 = {
  slideNumber: 2,
  title: "Houseprice per Square Meter"
  filter: // shows price per m2 by five catagories in different colors, add popup
}

var slide3 = {
  slideNumber: 3,
  title: "House Area"
  filter: // shows house areas by five catagories in different colors, add popup
}

var slide4 = {
  slideNumber: 4,
  title: "Number of Bedrooms"
  filter: // shows how many bedrooms each houseprice location has in different colors, add popup
}

var slide5 = {
  slideNumber: 5,
  title: "School District"
  filter: // shows the school districts of each houseprice location in different colors, add popup
}
