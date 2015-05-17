/**
 * Created by ssp on 29/3/2015.
 */
var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
  res.header("Access-Control-Allow-Methods", "GET, POST","PUT");
  
  next();
 });
 app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
var request = require('request');

app.get('/api/getTemp',function(req,res){
  request('http://mtp.doeyetea.eu:8080/gmswar/gms/getLastMeasurements/2/TEMP', function (error, response, body) {
      if (!error && response.statusCode == 200) {
       var info = JSON.parse(body);
       res.send(body)
      }else  res.send('sended ac_channel-turnoff');
    })
});

app.get('/api/getRain',function(req,res){
    request('http://mtp.doeyetea.eu:8080/gmswar/gms/getLastMeasurements/2/RAIN', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            res.send(body)
        }else  res.send('sended ac_channel-turnoff');
    })
});

app.get('/api/getAir',function(req,res){
    request('http://mtp.doeyetea.eu:8080/gmswar/gms/getLastMeasurements/2/AIRSPEED', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            res.send(body)
        }else  res.send('sended ac_channel-turnoff');
    })
});

app.get('/api/getPluvio',function(req,res){
    request('http://mtp.doeyetea.eu:8080/gmswar/gms/getLastMeasurements/2/PLUVIO', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            res.send(body)
        }else  res.send('sended ac_channel-turnoff');
    })
});
app.use(express.static(__dirname + '/'));

var port=(process.env.PORT || 3000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
