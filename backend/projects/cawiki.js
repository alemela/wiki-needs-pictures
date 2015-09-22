var bot = require('nodemw');
var utils = require('../lib/utils.js');

var client = new bot({
        server: 'ca.wikipedia.org',
        path: '/w'
    });

utils.digCategory(client, "Categoria:", "Articles que necessiten una foto", "031");
