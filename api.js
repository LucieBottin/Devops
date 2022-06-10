// api.js

const express = require('express')
const app = express();
const port = 8081;

app.post('/predict', function (req, res) {
    const lat = req.query.lat;
    const lon = req.query.lon;
    //const query = "https://api.openweathermap.org/data/2.5/weather?lat&lon=$LONG&appid=$API_KEY"
    res.send({
      'lat': lat,
      'lon': lon,
    });
  });
    res.status(200).send(query);

  app.get('/api', function(req, res) {
    const user_id = req.query.id;
    const token = req.query.token;
    const geo = req.query.geo;
  
    res.send({
      'user_id': user_id,
      'token': token,
      'geo': geo
    });
  });

console.log(`==> API listening on port ${port}`)
app.listen(port);