'use strict';

var mongoose = require('mongoose');

// @todo add other GMaps info
module.exports = new mongoose.Schema({
    latitude : {type : Number},
    longitude : {type : Number}
});

