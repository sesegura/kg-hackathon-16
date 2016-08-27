'use strict';

var mongoose = require('mongoose'),
    location_schema = require('./location');

module.exports = new mongoose.Schema({
    donnor_name : {type : String},
    reason : {type : String},
    blood_quantity : {type : Number},
    location : [location_schema]
});

