var bot = require('nodemw');
var utils = require('../lib/utils.js');

var client = new bot({
        server: 'fr.wikipedia.org',
        path: '/w'
    });

utils.digSimpleCategory(client, "Catégorie:", "À illustrer", "011");
