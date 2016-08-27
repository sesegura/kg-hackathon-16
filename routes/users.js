'use strict';

var express = require('express'),
    model = require('../models/init');


var router = express.Router();

router.get('/:id', function(req, res) {

    model.user.findById(req.params.id, function(err, user){
        res.json(user);
    });

});

router.post('/', function(req, res){

    var processed_user = new model.user(req.body);

    processed_user.save(function(err, user){
        res.json(user);
    });

});


router.put('/:id', function(req, res){

    model.user.findByIdAndUpdate(req.params.id, req.body, function(err, id){
        res.send(id);
    });
});

module.exports = router;

