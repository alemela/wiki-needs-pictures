var bot = require('nodemw');
var utils = require('../lib/utils.js');

var client = new bot({
        server: 'en.wikipedia.org',
        path: '/w'
    });

utils.digCategoryTalk(client, "Category:", "Wikipedia requested photographs of places", "Talk:", "021");
