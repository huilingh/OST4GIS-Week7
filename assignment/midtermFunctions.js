/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */
// set up the map
var mapOpts = {
  center: [39.918240, 116.389347],
  zoom: 11
};
var map = L.map('map', mapOpts);

var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

// my marker style
var myMarker = {
  radius: 6,
  fillColor: "#c42b2b",
  color: "#ffffff",
  weight: 1.5,
  opacity: 1,
  fillOpacity: 0.8
}

// get data
var dataset = "https://raw.githubusercontent.com/CPLN-692-401/datasets/master/geojson/housingprice_Beijing.geojson"

// parse data
var parse = function(res) {return JSON.parse(res)};

// the code execute
$(document).ready(function() {
  $.ajax(dataset).done(function(data) {
    var parsedData = parse(data);
    console.log(parsedData)
    featureGroup = L.geoJson(parsedData, {
      pointToLayer: function (feature, latlng) {return L.circleMarker(latlng, myMarker);}
      // onEachFeature: function(feature, layer) {layer.bindPopup(feature.properties.name)}
      // style: myStyle,
      // filter: myFilter
    }).addTo(map);
  });
});

/* things to do:
add popup
change sidebar text when clicked
add buttons
remove and add new data when clicked

to be continued
*/
