var fs = require('fs');

var visitedCat = [];

var digSimpleCategory = function (client, cat, code) { 
    client.getPagesInCategory(cat, function(err, pages) {
        pages.forEach(function(page) {
            locatePage(client, page.title, code);
        });
    });
}


var digCategoryTalk = function (client, cLabel, cat, tLabel, code) {
    console.log(">>> "+cat);
    for (oldCat in visitedCat) {
        if (cat === oldCat)
            return;
    }
    visitedCat.push(cat);
    
    client.getPagesInCategory(cat, function(err, pages) {
        pages.forEach(function(page) {
            if (page.title.indexOf(cLabel) > -1) {
                digCategoryTalk(client, cLabel, page.title.substring(cLabel.length, page.title.length), tLabel, code);
            } else if (page.title.indexOf(tLabel) > -1) {
                locatePage(client, page.title.substring(tLabel.length, page.title.length), code);
            }
        });
    });
}


var digCategory = function (client, cLabel, cat, code) {
    console.log(">>> "+cat);
    for (oldCat in visitedCat) {
        if (cat === oldCat)
            return;
    }
    visitedCat.push(cat);
    
    client.getPagesInCategory(cat, function(err, pages) {
        pages.forEach(function(page) {
            if (page.title.indexOf(cLabel) > -1) {
                digCategory(client, cLabel, page.title.substring(cLabel.length, page.title.length), code);
            } else {
                locatePage(client, page.title, code);
            }
        });
    });
}


var locatePage = function (client, pagename, code) {
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

exports.digSimpleCategory = digSimpleCategory;
exports.digCategory = digCategory;
exports.digCategoryTalk = digCategoryTalk;
exports.locatePage = locatePage;

