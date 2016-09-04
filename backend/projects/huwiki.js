var bot = require('nodemw');
var utils = require('../lib/utils.js');

var client = new bot({
        server: 'hu.wikipedia.org',
        path: '/w'
    });

utils.digCategory(client, "Kategória:", "Keresett képek", "071");
// not currently supported: all articles linked from Wikipédia:Kért képek
