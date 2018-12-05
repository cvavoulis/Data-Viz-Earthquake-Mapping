# Visualizing Data with Leaflet

   The USGS provides earthquake data in a number of different formats, updated every 5 minutes. I visited the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and pick the weekly earthquake report data set to visualize.

   I created a map using d3.js, Mapbpx, and Leaflet that plots all of the earthquakes from the data set based on their longitude and latitude. I used a map tile from the Mapbox API and connected the data uding Leaflet. 

   * The data markers reflect the magnitude of the earthquake in their size and color. Earthquakes with higher magnitudes appear larger and darker in color.

   * The popups provide additional information about the earthquake when a marker is clicked.

   * The legend provides context for your map data.


# Built With
* Javascript (d3)
* Leaflet
* Mapbox
* HTML 
