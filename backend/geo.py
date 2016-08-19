import csv
import reverse_geocode

with open('../data/data.csv', 'rb') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',', quotechar='"')
    first = 0
    for row in spamreader:
        if (first == 0):
            first = 1
            continue
        lat = float(row[1])
        lon = float(row[2])

        coordinates = (lat, lon)
        location = reverse_geocode.get(coordinates)

        country_file = open('../data/countries/' + location["country_code"], 'a')
        writer = csv.writer(country_file)
        writer.writerow([row[0], row[1], row[2], row[3], row[4]])
