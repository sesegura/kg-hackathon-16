'use strict';

var mongoose = require('mongoose'),
    donnor_information_schema = require('./donnor-information');

module.exports = new mongoose.Schema({
    name : {type : String},
    email : {type : String},
    password : {type : String},
    is_qualified : {type : Boolean, default : false},
    is_evaluated : {type : Boolean, default : false},
    donnor_information : [donnor_information_schema]
});

