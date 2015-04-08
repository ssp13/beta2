/**
 * Created by ssp on 29/3/2015.
 */
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/'));

app.listen(process.env.PORT || 3000);