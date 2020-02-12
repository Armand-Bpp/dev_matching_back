var express = require('express');
var router = express.Router(); // same as those 2 lines: var router = require('express').Router();

var skillModel = require('../models').skill;

// CREATE
router.post('/', function (req, res) {
    console.log('POST /users');
    console.log('POST /users req.body', req.body);
    console.log('POST /users req.query', req.query);
    console.log('POST /users req.params', req.params);

    var skill = new skillModel({
        name: req.body.name || ''
    });
    user.save(function (err, skillDb) {
        if (err !== null) {
            console.log('skill save err', err);
            res.json({
                success: false,
                message: err.toString()
            });
            return;
        }
        res.json({
            success: true,
            data: skillDb
        });
    });
});

