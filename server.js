/**
 * Created by ssp on 29/3/2015.
 */
var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var temperature=[];

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
var temp={};
var tempSensor=[];
app.get('/api/getTemp',function(req,res){
  request('http://mtp.doeyetea.eu:8080/gmswar/gms/getLastMeasurements/2/TEMP', function (error, response, body) {
      if (!error && response.statusCode == 200) {

          var info = JSON.parse(body);

          if (info.insertedOn !== temp.value_previous) {
              tempSensor.push(info);
              console.log(info.value,temp.value_previous)
            temperature.push(parseFloat(info.value));
            temp.value_previous = info.insertedOn;
          }

          res.send(body)
      }
    })
});

app.get('/api/getTempAll',function(req,res){
   res.send(temperature);
});
app.get('/api/getTempSensor',function(req,res){
    res.send(tempSensor);

});

app.get('/api/snapshot',function(req,res){
    request('http://91.138.155.253:4001/snapshot', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          res.send(response);
        }
    })
});
app.get('/api/getAir',function(req,res){
    request('http://mtp.doeyetea.eu:8080/gmswar/gms/getLastMeasurements/2/AIRSPEED', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            res.send(body)
        }
    })
});

app.get('/api/getLastTemperatures',function(req,res){
    console.log(req)
    request('http://mtp.doeyetea.eu:8080/gmswar/gms/getMeasurementsByModule/4/15', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            res.send(body)
        }
    })
});
app.get('/api/getTemp',function(req,res){
    request('http://mtp.doeyetea.eu:8080/gmswar/gms/getLastMeasurements/2/PLUVIO', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            res.send(body)
        }
    })
});

app.get('/api/getVane',function(req,res){
    request('http://mtp.doeyetea.eu:8080/gmswar/gms/getLastMeasurements/2/VANE', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            res.send(body)
        }
    })
});
app.get('/api/getAll',function(req,res){
    request('http://mtp.doeyetea.eu:8080/gmswar/gms/getMeasurementsByStation/2/', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            res.send(body)
        }
    })
});
app.use(express.static(__dirname + '/'));

var port=(process.env.PORT || 3000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
