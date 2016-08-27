'use strict';

var express = require('express'),
    model = require('../models/init');


var router = express.Router();


router.get('/', function(req, res) {
    /*
    model.donation_request.find(function(err, donation_requests){
        res.json(donation_requests);
    });
    */
    
    model.donation_request.aggregate(
        { 
            $group : { 
                _id : '$location',
                requestors : { $push : '$donnor_name' },
                reasons : { $push : '$reason' },                
                quantity : { $sum : '$blood_quantity' }
            }
        },
        function(err, donation_requests){
            if (err) res.send(err);
            res.json(donation_requests);
        }
    );

});


router.get('/:id', function(req, res) {

    model.donation_request.findById(req.params.id, function(err, donation_request) {
        res.json(donation_request);    
    });

});


router.post('/', function(req, res){

    var processed_model = new model.donation_request(req.body);

    processed_model.save(function(err, donation_request){
        res.send(donation_request);
    });

});

module.exports = router;

