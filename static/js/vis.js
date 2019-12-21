const lngList = {
    "nyc": [40.77, -73.97, 11],
    "london": [51.5, -0.1, 10],
    "tokyo": [35.6, 139.46, 10],
    "beijing": [40.2, 116.46, 9],
    "paris": [48.85, 2.33, 12]
}

// initialize the map
var layer = new L.StamenTileLayer("toner");
var map = new L.Map("mapid", {
    center: new L.LatLng(lngList[city][0], lngList[city][1]),
    zoom: lngList[city][2]
});
map.addLayer(layer);

// add neighborhood layer
$.getJSON("../static/data/" + city + "-neighborhoods.geojson", function(hoodData){
    L.geoJson( hoodData, {
    style: function(feature){
        // var fillColor,
        //     density = feature.properties.density;
        // if ( density > 80 ) fillColor = "#006837";
        // else if ( density > 40 ) fillColor = "#31a354";
        // else if ( density > 20 ) fillColor = "#78c679";
        // else if ( density > 10 ) fillColor = "#c2e699";
        // else if ( density > 0 ) fillColor = "#ffffcc";
        // else fillColor = "#f7f7f7";  // no data
        var fillColor = "#607d8b";
        return { color: "#3f51b5", weight: 4, fillColor: fillColor, fillOpacity: .6 };
    },
    onEachFeature: function( feature, layer ) {
        layer.bindPopup( "<strong>" + feature.properties.name + "</strong><br/>" )
    }
    }).addTo(map);
});

// add marker
$.getJSON("../static/data/" + city + "_pre.geojson", function(data){
    var roomIcon = L.icon({
        iconUrl: '../static/img/pin.png',
        iconSize: [40,40]
    });
    var rooms = L.geoJson(data,{
    pointToLayer: function(feature, latlng){
        var marker = L.marker(latlng, {icon: roomIcon});
        marker.bindPopup(
            "<h3>" + feature.properties.name + "<a href='" + feature.properties.listing_url + "'> [link]</a></h3><br/>"
            + "<strong>Property Type: </strong>" + feature.properties.property_type + "<br/>"
            + "<strong>Room Type: </strong>" + feature.properties.room_type + "<br/>"
            + "<strong>Price: </strong>" + feature.properties.price + " /night | <strong>Rating: </strong> " + feature.properties.review_scores_rating + "<br/>"
            + feature.properties.accommodates + " accommodates | " + feature.properties.beds + " beds<br/>"
            + feature.properties.bathrooms + " bathrooms | " + feature.properties.bedrooms + " bedrooms<br/>" 
            + feature.properties.minimum_nights + " nights minimum | " + feature.properties.availability_365 + " days available/year<br/>"
            + "<strong>Amenities: </strong>" + feature.properties.amenities.substring(1, feature.properties.amenities.length - 1)
        )
        return marker;
    }
    });
    var clusters = L.markerClusterGroup();
    clusters.addLayer(rooms);
    map.addLayer(clusters);
});