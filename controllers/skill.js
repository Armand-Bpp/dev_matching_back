var express = require('express');
var router = express.Router(); // same as those 2 lines: var router = require('express').Router();

var skillModel = require('../models').skill;

// CREATE
router.post('/', function (req, res) {
    console.log('POST /skills');
    console.log('POST /skills req.body', req.body);
    console.log('POST /skills req.query', req.query);
    console.log('POST /skills req.params', req.params);

    var skill = new skillModel({
        name: req.body.name || '',
        parentId : req.body.parentId 
      });
      
    skill.save(function (err, skillDb) {
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


// READ
router.get('/', function (req, res) {
    console.log('GET /skills');
    console.log('GET /skills req.body', req.body);
    console.log('GET /skills req.query', req.query);
    console.log('GET /skills req.params', req.params);

    var limit = parseInt(req.query.limit);
    if (isNaN(limit) === true) {
        limit = 20;
    }
    if (limit > 20) {
        limit = 20;
    }

    console.log('GET /skills limit', limit);

    skillModel
        .find({})
        .limit(limit)
        .exec(function (err, skills) {
            console.log('GET /skills err', err);
            console.log('GET /skillssssss', skills);
            if (err !== null) {
                console.log('Error db find err:', err);
                res.json({
                    success: false,
                    message: err.toString()
                });
                return;
            }
            res.json({
                success: true,
                data: skills
            });
        });
});

router.get('/:id', function (req, res) {
    console.log('GET /skills/:id');
    console.log('GET /skills/:id req.body', req.body);
    console.log('GET /skills/:id req.query', req.query);
    console.log('GET /skills/:id req.params', req.params);

    skillModel.findById(req.params.id, function (err, skill) {
        console.log('GET /skills/:id err', err);
        console.log('GET /skills/:id offers', offer);
        if (err !== null) {
            console.log('Error db find err:', err);
            res.json({
                success: false,
                message: err.toString()
            });
            return;
        }
        res.json({
            success: true,
            data: skill
        });
    });
});


// UPDATE
router.put('/:id', function (req, res) {
    console.log('PUT /skills/:id');
    console.log('PUT /skills/:id req.body', req.body);
    console.log('PUT /skills/:id req.query', req.query);
    console.log('PUT /skills/:id req.params', req.params);

    var name = req.query.name || '';
    if (name.length === 0) {
        res.json({
            success: false,
            message: 'Name is invalid'
        });
        return;
    }

    skillModel.updateOne(
        { _id: req.params.id }, // query
        { name: name }, // document
        function (err, result) {
            if (err !== null) {
                console.log('PUT /skills/:id Update error err', err);
                res.json({
                    success: false,
                    message: err.toString()
                });
                return;
            }
            res.json({
                success: true,
                data: result
            });
        }
    );
});



// DELETE
router.delete('/:id', function (req, res) {
    console.log('DELETE /skills/:id');
    console.log('DELETE /skills/:id req.body', req.body);
    console.log('DELETE /skills/:id req.query', req.query);
    console.log('DELETE /skills/:id req.params', req.params);

    skillModel.deleteOne({ _id: req.params.id }, function (err, result) {
        if (err !== null) {
            console.log('DELETE /skills/:id delete error err', err);
            res.json({
                success: false,
                message: err.toString()
            });
            return;
        }
        res.json({
            success: true,
            data: result
        });
    });
});

module.exports = router;