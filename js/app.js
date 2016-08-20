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

    map.addLayer(markers);
    //aggrego layers in markers
    markers.addLayer(airport);
    markers.addLayer(railwaystation);
    markers.addLayer(city);
    markers.addLayer(generic);

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
    bootbox.dialog({
        animate: true,
        closeButton: false,
        message:
            '<script src="js/countries.js"></script><input id="autocountries" type="text" placeholder="Choose a country" class="form-control input-md"/>' +
            '<br /><center>or</center><br />' +
            '<center><button type="button" class="btn btn-success" onclick="findMe();">use your location</button></center>' +
            '<hr/><center><small>After selected, please wait some seconds while loading.</small></center>'
    });
});

var load_data = function (cc) {
    console.log("Loading " + cc + " data...");
    $.ajax ({
        type:'GET',
        dataType:'text',
        url: dataUrl + cc,
        contentType: "text/csv; charset=utf-8",
        error: function() {
            alert('Error retrieving csv file');
        },
        success: function(csv) {
            dataCsv = csv;
            addCsvMarkers();
        }
    });
}

var findMe = function () {
    $.ajax({
        url: "https://freegeoip.net/json/?callback=",
        type: "GET",
        success: function(data) {
            var geo = JSON.stringify(data);
            var cc = JSON.parse(geo).country_code
            bootbox.hideAll();
            load_data(cc);
        },
        error: function(xhr, status, error) {
            console.error(xhr.status);
        }
    });
}

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

var userLang = navigator.language || navigator.userLanguage;
userLang = userLang.toUpperCase();

/* BUTTONS */

L.easyButton('fa-info', function() {
    var messageInABottle = "";
    switch (true) {
        case userLang.startsWith("DE"):
            messageInABottle = message_DE;
            break;
        case userLang.startsWith("ES"):
            messageInABottle = message_ES;
            break;
        case userLang.startsWith("FR"):
            messageInABottle = message_FR;
            break;
        case userLang.startsWith("JA"):
            messageInABottle = message_JA;
            break;
        case userLang.startsWith("IT"):
            messageInABottle = message_IT;
            break;
        case userLang.startsWith("SV"):
            messageInABottle = message_SV;
            break;
        default:
            messageInABottle = message_EN;
    }
    bootbox.dialog({
        title: "<center>Wiki Needs Pictures</center>",
        message: messageInABottle
    });
}, "Info", { position: 'bottomleft' }).addTo(map);

L.easyButton('fa-compass', function (){
    map.locate({setView: true});
}, "Interact with the map", { position: 'bottomright' }).addTo(map);
