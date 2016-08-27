/*jshint strict:false */
/*jslint node: true */

'use strict';

//Dependencies
var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var app = express(),
    config = require('./config');

//connect to our database
var connectionString = config.connection + config.dbname;

mongoose.connect(connectionString, function(err) {
  if (err) { throw err; }
  console.log('Succesfully connected to ' + config.dbname);
});

//Mongoose Connection Handlers
mongoose.connection.on('error', function(err) {
  console.log(err);
});

app.set('title', 'BloodBank');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.send('Hello World!');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
