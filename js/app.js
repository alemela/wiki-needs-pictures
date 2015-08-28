var basemap = new L.TileLayer(baseUrl, {maxZoom: 17, attribution: baseAttribution, subdomains: subdomains, opacity: opacity});

var popupOpts = {
    autoPanPadding: new L.Point(5, 50),
    autoPan: true
};

var railwaystation = L.geoCsv (null, {
    firstLineTitles: true,
    fieldSeparator: fieldSeparator,
    onEachFeature: function (feature, layer) {
        popupGenerator(feature, layer);
    },
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: stationMarker });
    },
    filter: function (feature, layer) {
        return feature.properties.type === "railwaystation";
    }
});

var airport = L.geoCsv (null, {
    firstLineTitles: true,
    fieldSeparator: fieldSeparator,
    onEachFeature: function (feature, layer) {
        popupGenerator(feature, layer);
    },
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: airportMarker });
    },
    filter: function (feature, layer) {
        return feature.properties.type === "airport";
    }
});

var city = L.geoCsv (null, {
    firstLineTitles: true,
    fieldSeparator: fieldSeparator,
    onEachFeature: function (feature, layer) {
        popupGenerator(feature, layer);
    },
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: cityMarker });
    },
    filter: function (feature, layer) {
        return feature.properties.type === "city" || feature.properties.type === "am3rd" || feature.properties.type === "am2nd" || feature.properties.type === "am1st";
    }
});

var map = new L.Map('map', {
    center: new L.LatLng(0, 0),
    zoom: 2, 
    maxZoom: maxZoom, 
    layers: [basemap]
});

var markers = new L.MarkerClusterGroup();
var dataCsv;

var addCsvMarkers = function() {

    map.removeLayer(markers);
    railwaystation.clearLayers();
    airport.clearLayers();

    markers = new L.MarkerClusterGroup(clusterOptions);

    //creo layers
    airport.addData(dataCsv);
    railwaystation.addData(dataCsv);
    railwaystation.addData(dataCsv); //XXX doppia chiamata per farlo funzionare
    city.addData(dataCsv);
    city.addData(dataCsv);

    //aggrego layers in markers
    markers.addLayer(airport);
    markers.addLayer(railwaystation);
    markers.addLayer(city);

    map.addLayer(markers);
    try {
        var bounds = markers.getBounds();
        if (bounds) {
            map.fitBounds(bounds);
        }
    } catch(err) {
        // pass
    }
    return false;
};

var popupGenerator = function(feature, layer) {
    var popup = '<div class="popup-content">';
    var title = feature.properties.title;
    layer.bindLabel(feature.properties.title, {className: 'map-label'});
    var prop;
    codes.some(function (obj) {
        if (obj.id === feature.properties.code) {
            prop = obj;
            return true;
        }
    });
    popup += '<b><a target="_blank" href="//'+prop.site+'/wiki/' + title + '">'+ title + '</a></b> <small>['+prop.prj+']</small>';
    popup += '<br><small>From: <a target="_blank" href="//'+prop.site+'/wiki/' + prop.source + '">'+ prop.source + '</a>';
    popup += "</popup-content>";
    layer.bindPopup(popup, popupOpts);
}

/* CSV LOADING */

$(document).ready( function() {
    $.ajax ({
        type:'GET',
        dataType:'text',
        url: dataUrl,
        contentType: "text/csv; charset=utf-8",
        error: function() {
            alert('Error retrieving csv file');
        },
        success: function(csv) {
            dataCsv = csv;
            addCsvMarkers();
        }
    });
});

/* LAYERS CONTROL */ //XXX too much hardwritten

var overlayMaps = {};
var emptyLayers = {
    "Aeroporti":  new L.layerGroup().addTo(map),
    "Stazioni":  new L.layerGroup().addTo(map)
};
for (var index in emptyLayers) {
    overlayMaps[index] = emptyLayers[index];
}

var control = L.control.layers(null, overlayMaps);
control.addTo(map);

map.on('overlayadd', function (a) {
    if (a.name === "Aeroporti") {
        markers.addLayer(airport);
    } else if (a.name === "Stazioni") {
        markers.addLayer(railwaystation);
    }
});
map.on('overlayremove', function (a) {
    if (a.name === "Aeroporti") {
        markers.removeLayer(airport);
    } else if (a.name === "Stazioni") {
        markers.removeLayer(railwaystation);
    }
});

/* BUTTONS */

L.easyButton('fa-info', function() {
    bootbox.dialog({
        title: "Wiki Needs Pictures",
        message: '<h5>Work in progress...</h5><ul><li><a href="https://it.wikipedia.org/wiki/Wikipedia:Bar/Discussioni/Nuovo_tool_per_le_immagini_richieste" target="_blank">Discussione su Wikipedia in italiano</a></li><li><a href="https://github.com/alemela/wiki-needs-pictures" target="_blank">Repository su Github</a></li></ul>'
    });
}, "Info", { position: 'bottomleft' }).addTo(map);

L.easyButton('fa-compass', function (){
    map.locate({setView: true});
}, "Interact with the map", { position: 'bottomright' }).addTo(map);
