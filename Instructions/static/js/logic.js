
// Link to GeoJSON
var APILink = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"


// Grab data with d3
d3.json(APILink, function(data) {
  findFeatures(data.features);});

  function findFeatures(data){
    var myMap = L.map("map", {
      center: [37, -122],
      zoom: 5, 
      // layers: [streets]
    });


      L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "mapbox.streets",
        accessToken: API_KEY
      }).addTo(myMap);

      data.forEach(feature => {
        var mag = feature.properties.mag;

        var color = "";
        if (mag <= 1) {
            color = "blue";
        }
        else if (mag <= 2) {
            color = "green";
        }
        else if (mag <= 3) {
            color = "yellow";
        }
        else if (mag <= 4) {
            color = "orange";
        }
        else if (mag <= 5) {
            color = "pink";
        }
        else {
            color = "red";
        }

        L.circle([feature.geometry.coordinates[1],
                 feature.geometry.coordinates[0]], {
                    fillColor: color,
                    fillOpacity: 0.75,
                    color: color,
                    radius: mag * 10000
                 }).bindPopup("<h2> Location: " + feature.properties.place + "<hr>Mag: " + mag + "</h2>").addTo(myMap);
    });


}






