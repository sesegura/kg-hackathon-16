/*jshint strict:false */
/*jslint node: true */

'use strict';

// dependencies
var express = require('express'),
    path = require('path'),
    route = require('route'),
    body_parser = require('body-parser'),
    mongoose = require('mongoose');

var app = express(),
    config = require('./config');

// routes
var users_route = require('./routes/users'),
    donation_requests_route = require('./routes/donation-requests');

// connect to our database
var connection_string = config.host + ":" + config.port + "/" + config.dbname;

mongoose.connect(connection_string, function(err) {
    if (err) { throw err; }
    console.log('Succesfully connected to ' + config.dbname);
});

// mongoose Connection Handlers
mongoose.connection.on('error', function(err) {
    console.log(err);
});

app.set('title', 'BloodBank');

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended : false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', users_route);
app.use('/donation/requests', donation_requests_route);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(3000, function() {
  console.log('KG-Hackathon 2016: Unagi!!');
});

