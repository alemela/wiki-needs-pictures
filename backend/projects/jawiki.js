var bot = require('nodemw');
var utils = require('../lib/utils.js');

var client = new bot({
        server: 'ja.wikipedia.org',
        path: '/w'
    });

utils.digCategory(client, "Category:", "画像提供依頼", "011");
