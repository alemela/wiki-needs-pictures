var bot = require('nodemw');
var utils = require('../lib/utils.js');

var client = new bot({
        server: 'sv.wikipedia.org',
        path: '/w'
    });

utils.digCategory(client, "Kategori:", "Illustrationsbehov", "051");
