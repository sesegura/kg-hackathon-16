'use strict';
var mongoose = require('mongoose'),
    schemas = {
        donnor_information : require('./donnor-information')
    }

var userSchema = mongoose.Schema({
    first_name : {type : String, required : true},
    last_name : {type : String, required : true},
    age : {type : Number, required : true},
    email : {type : String, required : true},
    donnor_information : [schemas.donnor_information]
});

return userSchema;
