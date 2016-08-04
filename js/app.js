var basemap = new L.TileLayer(baseUrl, {maxZoom: maxZoom, minZoom: minZoom, attribution: baseAttribution, subdomains: subdomains, opacity: opacity});

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

var generic = L.geoCsv (null, {
    firstLineTitles: true,
    fieldSeparator: fieldSeparator,
    onEachFeature: function (feature, layer) {
        popupGenerator(feature, layer);
    },
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: blueMarker });
    },
    filter: function (feature, layer) {
        return feature.properties.type === "landmark" || feature.properties.type === "undefined";
    }
});

var map = new L.Map('map', {
    center: new L.LatLng(0, 0),
    zoom: zoom,
    maxZoom: maxZoom,
    minZoom: minZoom,
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
    //XXX double call to make it works
    airport.addData(dataCsv);
    railwaystation.addData(dataCsv);
    railwaystation.addData(dataCsv);
    city.addData(dataCsv);
    city.addData(dataCsv);
    generic.addData(dataCsv);
    generic.addData(dataCsv);

    //aggrego layers in markers
    markers.addLayer(airport);
    markers.addLayer(railwaystation);
    markers.addLayer(city);
    markers.addLayer(generic);

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
    if (prop.id !== "999") {
        popup += '<b><a target="_blank" href="//'+prop.site+'/wiki/' + title + '">'+ title + '</a></b> <small>['+prop.prj+']</small>';
    } else {
        popup += '<b><a target="_blank" href="//'+prop.site+'/wiki/' + feature.properties.wd + '">'+ title + '</a></b> <small>['+prop.prj+']</small>';
    }
    if (prop.source !== null)
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
    "Airports":  new L.layerGroup().addTo(map),
    "City":  new L.layerGroup().addTo(map),
    "Railwaystations":  new L.layerGroup().addTo(map),
    "Uncategorized":  new L.layerGroup().addTo(map)
};
for (var index in emptyLayers) {
    overlayMaps[index] = emptyLayers[index];
}

var control = L.control.layers(null, overlayMaps);
control.addTo(map);

map.on('overlayadd', function (a) {
    if (a.name === "Airports") {
        markers.addLayer(airport);
    } else if (a.name === "City") {
        markers.addLayer(city);
    } else if (a.name === "Railwaystations") {
        markers.addLayer(railwaystation);
    } else if (a.name === "Uncategorized") {
        markers.addLayer(generic);
    }
});
map.on('overlayremove', function (a) {
    if (a.name === "Airports") {
        markers.removeLayer(airport);
    } else if (a.name === "City") {
        markers.removeLayer(city);
    } else if (a.name === "Railwaystations") {
        markers.removeLayer(railwaystation);
    } else if (a.name === "Uncategorized") {
        markers.removeLayer(generic);
    }
});

/* BUTTONS */

L.easyButton('fa-info', function() {
    bootbox.dialog({
        title: "<center>Wiki Needs Pictures</center>",
        message: '<p><b>Many Wikipedia articles have no images</b> or only few. Some of them talking about <b>things that are out there</b>, ready to be photographed. <b>Find them all!</b></p><hr/>' +
                 '<p>Each suggestion has a link to it\'s Wikipedia or Wikidata page and to the reason why is present here. If you want to make a pin disappear you have to resolve it\'s problem (e.g. removing the warning template in it\'s page or adding the image to Wikidata).</p>' +
                 '<p>For any trouble or suggestion write on <a href="https://meta.wikimedia.org/wiki/Grants_talk:IEG/Wiki_needs_pictures" target="_blank">this page</a>. This is an open source project! Let\'s code together in this <a href="https://github.com/alemela/wiki-needs-pictures" target="_blank">Github repository.</a></p>' +
                 '<p><small>The tool updates the view once a day. Please be patient, it takes a while to load all the data.<small></p>'
    });
}, "Info", { position: 'bottomleft' }).addTo(map);

L.easyButton('fa-compass', function (){
    map.locate({setView: true});
}, "Interact with the map", { position: 'bottomright' }).addTo(map);

map.locate({setView: true});
