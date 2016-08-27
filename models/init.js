'use strict';

var mongoose = 	require('mongoose');

var schemas = {
    user : require('./schemas/user'),
    donation_request : require('./schemas/donation-request');
};

module.exports = {
    User : mongoose.model('user', schemas.user()),
    DonationRequest : mongoose.model('donation_request', schemas.donation_request())
};

