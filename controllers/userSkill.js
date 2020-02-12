var express = require('express');
var router = express.Router(); // same as those 2 lines: var router = require('express').Router();

var userskillModel = require('../models').userskill;

// CREATE
router.post('/', function (req, res) {
    console.log('POST /userskills');
    console.log('POST /userskills req.body', req.body);
    console.log('POST /userskills req.query', req.query);
    console.log('POST /userskills req.params', req.params);

    var userskill = new userskillsModel({
        category: req.body.category || '',
        created: req.body.created || ''
    });
    userskill.save(function (err, userskillDb) {
        if (err !== null) {
            console.log('userskill save err', err);
            res.json({
                success: false,
                message: err.toString()
            });
            return;
        }
        res.json({
            success: true,
            data: userskillDb
        });
    });
});


// READ
router.get('/', function (req, res) {
    console.log('GET /userskills');
    console.log('GET /userskills req.body', req.body);
    console.log('GET /userskills req.query', req.query);
    console.log('GET /userskills req.params', req.params);

    var limit = parseInt(req.query.limit);
    if (isNaN(limit) === true) {
        limit = 20;
    }
    if (limit > 20) {
        limit = 20;
    }

    console.log('GET /userskills limit', limit);

    userskillModel
        .find({})
        .limit(limit)
        .exec(function (err, userskills) {
            console.log('GET /userskills err', err);
            console.log('GET /userskills userskills', userskills);
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
                data: userskills
            });
        });
});

router.get('/:id', function (req, res) {
    console.log('GET /userskills/:id');
    console.log('GET /userskills/:id req.body', req.body);
    console.log('GET /userskills/:id req.query', req.query);
    console.log('GET /userskills/:id req.params', req.params);

    userskillModel.findById(req.params.id, function (err, userskill) {
        console.log('GET /userskills/:id err', err);
        console.log('GET /userskills/:id userskills', userskill);
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
            data: userskill
        });
    });
});

// UPDATE
router.put('/:id', function (req, res) {
    console.log('PUT /userskills/:id');
    console.log('PUT /userskills/:id req.body', req.body);
    console.log('PUT /userskills/:id req.query', req.query);
    console.log('PUT /userskills/:id req.params', req.params);

    var name = req.query.name || '';
    if (name.length === 0) {
        res.json({
            success: false,
            message: 'Name is invalid'
        });
        return;
    }

    userskillModel.updateOne(
        { _id: req.params.id }, // query
        { name: name }, // document
        function (err, result) {
            if (err !== null) {
                console.log('PUT /userskills/:id Update error err', err);
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
    console.log('DELETE /userskills/:id');
    console.log('DELETE /userskills/:id req.body', req.body);
    console.log('DELETE /userskills/:id req.query', req.query);
    console.log('DELETE /userskills/:id req.params', req.params);

    userskillModel.deleteOne({ _id: req.params.id }, function (err, result) {
        if (err !== null) {
            console.log('DELETE /userskills/:id delete error err', err);
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