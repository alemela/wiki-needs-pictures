#!/bin/bash

#for file in projects/*.js
do
    nodejs $file
done

#remove duplicated lines
sort -u temp.csv > sorted.csv
rm temp.csv

#add header
sed -i '0,/^/s//title,lat,lng,type,code\n/' sorted.csv

#save current dataset into backup directory
mkdir -p ../data/backup
date=`date +"%Y-%m-%d_%H-%M-%S"`
mkdir ../data/backup/$date
mv ../data/data.csv ../data/backup/$date 2>/dev/null

#make current the newly generated one
mv sorted.csv ../data/data.csv

#split by countries
mv ../data/countries ../data/backup/$date 2>/dev/null
mkdir ../data/countries
python geo.py

#add header
for file in ../data/countries/*
do
    sed -i '0,/^/s//title,lat,lng,type,code\n/' $file
done
