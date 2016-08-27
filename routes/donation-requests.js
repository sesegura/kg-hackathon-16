'use strict';

var express = require('express'),
    model = require('../models/init');


var router = express.Router();

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

