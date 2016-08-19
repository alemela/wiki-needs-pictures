# Wiki Needs Pictures
Map showing entities around the world that need photographs on Wikipedia. The
tool is a web application consisting in a frontend where pinpoints are placed in
a OpenStreetMap layer powered by Leaflet. The data visualized coming from
Wikipedia and Wikidata and represent all those entities with coordinates and
with the need of a picture.

The aim of this project is to provide a simple and fun way to let people know
which things around them need a photo that Wikipedia wants.

![Wiki Needs Picture screenshot](https://github.com/alemela/wiki-needs-pictures/raw/master/screenshot.png "Wiki Needs Picture screenshot")

## Usage
### Install
You need a `bash` console, `nodejs` and `npm`.
Then you can simply `npm install`.

The project needs a web server to serve `index.html`. You can use the one you
prefer.

### Get data
To get all the data updated run `./backend/update.sh`. You'll get all the
new suggestion in `data/data.csv`.

You need to run this script at least once to get some data appear. If you want
to make it recurrent maybe you can use a cron job.

## Architecture
### Backend
The backend consists in many simple scripts, one for each project imported. This
permits to have many different strategies for collecting data.

By now there are 4 possibile strategies:

* `digCategory()` Pages listed in a category with children.
* `digCategoryTalk()` Pages that have the talk page listed in a category with
children.
* `digSimpleCategory()` Pages listed in a category without children.
* `SPARQL query` Wikidata only, an HTTP GET with a SPARQL query to [its
endpoint](http://query.wikidata.org/).

Each strategy comes along with an id, in order to have some text attached. You
can see current ids in `js/codes.js`.

### Frontend
The frontend consists in a `index.html` template page and some Javascript scripts
that load data and the map. All the data are downloaded when the webapp is
loading so you will notice a slow start but a fast experience for the rest of
the time. The loading time depends on the amount of pinpoints you want to
visualize.

## Translations
Following the [KISS](https://en.wikipedia.org/wiki/KISS_principle) only little
instructions are present inside the interface. Currently they are translated in
English, Italian, German, French, Spanish, Japanese (thanks @nicolas-raoul) and
Swedish. It's very appreciated if you want to
contribute with other languages! You can find all the texts in `js/message.js`.
