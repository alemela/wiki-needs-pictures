var bot = require('nodemw');
var utils = require('../lib/utils.js');

var client = new bot({
        server: 'ca.wikipedia.org',
        path: '/w'
    });

utils.digCategory(client, "Categoria:", "Articles de geografia que necessiten una foto", "031");
utils.digCategory(client, "Categoria:", "Articles d'edificis que necessiten una foto‎", "032");
