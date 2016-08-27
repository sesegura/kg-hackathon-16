'use strict';

var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    age : {type : Number},
    weight : {type : Number},
    blood_type : {type : Boolean},
    has_diseases : {type : Boolean},
    has_surgeries : {type : Boolean},
    has_drugs : {type : Boolean},
    has_tattoos : {type : Boolean}
});

