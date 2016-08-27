'use strict';

var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    donnor_name : {type : String},
    reason : {type : String},
    location : {type : String},
    blood_quantity : {type : Number}
});

