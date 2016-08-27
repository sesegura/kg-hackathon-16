'use strict';
var mongoose = require('mongoose'),
    schemas = {
        donnor_information : require('./donnor-information')
    }

var user_schema = mongoose.Schema({
    first_name : {type : String, required : true},
    last_name : {type : String, required : true},
    email : {type : String, required : true},
    password : {type : String, required : true},
    donnor_information : [schemas.donnor_information]
});

return user_schema;
