var http = require('http');
var fs = require('fs');
var bot = require('nodemw');
var client = new bot({
        server: 'it.wikipedia.org',
        path: '/w'
    });

client.getPagesInCategory('Immagini richieste - stazioni ferroviarie', function(err, pages) {
        client.log('Pages in category: %d', pages.length);
        client.logData(pages);

        pages.forEach(function(page) {
            var pagename = page.title.substring(12, page.title.length);
            var params = {
              action: 'query',
              prop: 'coordinates',
              titles: pagename
            };

            client.api.call(params, function(err, info, next, data) {
                for (id in info.pages) {
                    if (info.pages[id].coordinates !== undefined) {
                        var raw = info.pages[id].title+','+info.pages[id].coordinates[0].lat+','+info.pages[id].coordinates[0].lon+'\n';
                        fs.appendFile("data/stazioni.csv", raw, function(err) {
                        });
                    }
                }
            });

        });
});
