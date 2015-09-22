var http = require('http');
var fs = require('fs');
var bot = require('nodemw');
var client = new bot({
        server: 'sv.wikipedia.org',
        path: '/w'
    });

var visitedCat = [];

digCategory("Illustrationsbehov", "051");

function digCategory(cat, code) {
    console.log(">>> "+cat);
    for (oldCat in visitedCat) {
        if (cat === oldCat)
            return;
    }
    visitedCat.push(cat);
    
    client.getPagesInCategory(cat, function(err, pages) {
        pages.forEach(function(page) {
            if (page.title.indexOf("Kategori:") > -1) {
                digCategory(page.title.substring(9, page.title.length), code);
            } else {
                locatePage(page.title, code);
            }
        });
    });
}

function locatePage(pagename, code) {
    var params = {
      action: 'query',
      prop: 'coordinates',
      titles: pagename,
      coprop: 'type'
    };

    client.api.call(params, function(err, info, next, data) {
        for (id in info.pages) {
            if (info.pages[id].coordinates !== undefined) {
                var raw = info.pages[id].title+','+info.pages[id].coordinates[0].lat+','+info.pages[id].coordinates[0].lon+','+info.pages[id].coordinates[0].type+','+code+'\n';
                fs.appendFile("temp.csv", raw, function(err) {
                });
            }
        }
    });
}




