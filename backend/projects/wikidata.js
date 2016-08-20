var https = require('https');
var fs = require('fs');

var host = "query.wikidata.org";

appendToData = function (csvFile) {
    var first = 0;
    var lineReader = require('readline').createInterface({
        input: fs.createReadStream(csvFile)
    });

    lineReader.on('line', function (line) {
        if (first === 0) {
            first = 1;
            return;
        }
        var row = line.split(",");
        var longWD = row[0];
        var wd = longWD.replace("http://www.wikidata.org/entity/", "");
        var label = row[1];
        var point = row[2];
        point = point.split(" ");
        if (point.length !== 2)
            return

        var lon = point[0].replace("Point(","");
        var lat = point[1].replace(")","");

        if (!(parseFloat(lat) && parseFloat(lon)))
            return;

        var r = label + ',' + lat + ',' + lon + ',undefined,999,' + wd + '\n';

        fs.appendFile("temp.csv", r, function(err) {});
    });
}

struttureArchitettoniche = function () {
    return encodeURIComponent(
        "SELECT ?item ?itemLabel ?location " +
        "WHERE {" +
            "?item wdt:P31/wdt:P279* wd:Q811979 ." +
            "?item wdt:P625 ?location ." +
            "MINUS {?item wdt:P18 ?image}" +
            "MINUS {?item wdt:P373 ?commonsCat}" +
            "SERVICE wikibase:label {" +
                "bd:serviceParam wikibase:language 'en' . " +
            "}" +
        "}"
    );
}

launchSparqlQuery = function (query) {
    var result = "";

    var options = {
        host: host,
        path: "/sparql?query=" + (typeof(query) === "function" ? query() : query),
        method: "GET",
        headers: {
            accept: "text/csv"
        }
    };

    var req = https.request(options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
            result += chunk;
        });

        res.on('end', function() {
            if (res.statusCode === 200) {
                fs.appendFile("tempwd.csv", result, function(err) {});
                appendToData("tempwd.csv");
            } else {
                console.log("Status: " + res.statusCode);
                console.log("Status: " + result);
            }
        });
    });

    req.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    });

    req.end();
}

console.log("Wikidata...")
//fs.openSync("tempwd.csv", 'a')
//launchSparqlQuery(struttureArchitettoniche());
appendToData("tempwd.csv");
