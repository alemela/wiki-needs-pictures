var basemap = new L.TileLayer(baseUrl, {maxZoom: 17, attribution: baseAttribution, subdomains: subdomains, opacity: opacity});

/*var menuButton = L.control({ position: 'bottomright' });

menuButton.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'mini-submenu');
    this._div.innerHTML = '';
    return this._div;
};
menuButton.addTo(map);*/

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
    var popup = '<div class="popup-content"><table class="table table-striped table-bordered table-condensed">';
        for (var clave in feature.properties) {
            var title = airport.getPropertyTitle(clave).strip(); //XXX airport isn't generic
            var attr = feature.properties[clave];
            if (title == labelColumn) {
                layer.bindLabel(feature.properties[clave], {className: 'map-label'});
            }
            if (title === "title") {
                attr = '<a target="_blank" href="//it.wikipedia.org/wiki/' + attr + '">'+ attr + '</a>';
            }
            if (attr) {
                popup += '<tr><th>'+title+'</th><td>'+ attr +'</td></tr>';
            }
        }
        popup += "</table></popup-content>";
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

L.easyButton('fa-info', function(){
    window.open("https://it.wikipedia.org/wiki/Wikipedia:Bar/Discussioni/Nuovo_tool_per_le_immagini_richieste", '_blank');
}, "Info", { position: 'topright' }).addTo(map);

L.easyButton('fa-github', function(){
    window.open("https://github.com/alemela/wiki-needs-pictures", '_blank');
}, "Github repository", { position: 'topright' }).addTo(map);

L.easyButton('fa-compass', function (){
    map.locate({setView: true});
}, "Interact with the map", { position: 'bottomright' }).addTo(map);

/* UTILS */

if(typeof(String.prototype.strip) === "undefined") {
    String.prototype.strip = function() {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}
