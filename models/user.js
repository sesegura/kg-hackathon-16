'use strict';
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: {type: String, required: true}
});

return userSchema;