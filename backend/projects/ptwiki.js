var bot = require('nodemw');
var utils = require('../lib/utils.js');

var client = new bot({
        server: 'pt.wikipedia.org',
        path: '/w'
    });

utils.digSimpleCategory(client, "!Artigos sem imagens", "041");





