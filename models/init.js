'use strict';

var mongoose = 	require('mongoose');

var schemas = {
    user : require('./schemas/user'),
    donation_request : require('./schemas/donation-request')
};  

module.exports = {
    user : mongoose.model('user', schemas.user),
    donation_request : mongoose.model('donation_request', schemas.donation_request)
};

