#!/bin/sh


curl "https://api.openweathermap.org/data/2.5/weather?lat=$LAT&lon=$LONG&appid=$API_KEY"

exec nodejs api.js