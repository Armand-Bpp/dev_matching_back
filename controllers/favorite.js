var express = require('express');
var router = express.Router(); // same as those 2 lines: var router = require('express').Router();

var favoriteModel = require('../models').favorite;

// CREATE
router.post('/', function (req, res) {
    console.log('POST /users');
    console.log('POST /users req.body', req.body);
    console.log('POST /users req.query', req.query);
    console.log('POST /users req.params', req.params);

    var favorite = new favoriteModel({
        userId: req.body.userId || '',
        data: req.body.data || '',
        typeId: req.body.typeId || ''
    });
    favorite.save(function (err, favoriteDb) {
        if (err !== null) {
            console.log('favorite save err', err);
            res.json({
                success: false,
                message: err.toString()
            });
            return;
        }
        res.json({
            success: true,
            data: favoriteDb
        });
    });
});


// READ
router.get('/', function (req, res) {
    console.log('GET /FAV');
    console.log('GET /FAV req.body', req.body);
    console.log('GET /FAV req.query', req.query);
    console.log('GET /FAV req.params', req.params);

    var limit = parseInt(req.query.limit);
    if (isNaN(limit) === true) {
        limit = 20;
    }
    if (limit > 20) {
        limit = 20;
    }

    console.log('GET /favorite limit', limit);

    favoriteModel
        .find({})
        .limit(limit)
        .exec(function (err, favorites) {
            console.log('GET /favorite err', err);
            console.log('GET /favorite', favorites);
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
                data: favorites
            });
        });
});

router.get('/:id', function (req, res) {
    console.log('GET /skills/:id');
    console.log('GET /skills/:id req.body', req.body);
    console.log('GET /skills/:id req.query', req.query);
    console.log('GET /skills/:id req.params', req.params);

    favoriteModel.findById(req.params.id, function (err, offer) {
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
            data: favorite
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

    favoriteModel.updateOne(
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

    favoriteModel.deleteOne({ _id: req.params.id }, function (err, result) {
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