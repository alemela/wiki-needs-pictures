var bot = require('nodemw');
var utils = require('../lib/utils.js');

var client = new bot({
        server: 'it.wikipedia.org',
        path: '/w'
    });

utils.digCategoryTalk(client, "Categoria:", "Immagini richieste", "Discussione:", "001");
utils.digCategoryTalk(client, "Categoria:", "Voci monitorate - immagini E", "Discussione:", "002");





