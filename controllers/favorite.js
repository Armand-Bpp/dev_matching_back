var express = require('express');
var router = express.Router(); // same as those 2 lines: var router = require('express').Router();

var favoriteModel = require('../models').favorite;

// CREATE
router.post('/', function (req, res) {
    console.log('POST /favorites');
    console.log('POST /favorites req.body', req.body);
    console.log('POST /favorites req.query', req.query);
    console.log('POST /favorites req.params', req.params);

    const query = {
        userId: req.body.userId,
        typeId: req.body.type,
        data: {}
    }

    if (query.typeId === "user"){
        query.data.devId = req.body.devId

    } else if (query.typeId === "offer"){
        query.data.offerId = req.body.offerId
    }


    var favorite = new favoriteModel(query);
    favorite.save(function (err, favoritedb) {
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
            data: favoritedb
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
            console.log('GET /favoritesssss', favorites);
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
    console.log('GET /favorites/:id');
    console.log('GET /favorites/:id req.body', req.body);
    console.log('GET /favorites/:id req.query', req.query);
    console.log('GET /favorites/:id req.params', req.params);

    favoriteModel.findById(req.params.id, function (err, favorites) {
        console.log('GET /favorites/:id err', err);
        console.log('GET /favorites/:id offers', favorite);
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


// UPDATE
router.put('/:id', function (req, res) {
    console.log('PUT /favorites/:id');
    console.log('PUT /favorites/:id req.body', req.body);
    console.log('PUT /favorites/:id req.query', req.query);
    console.log('PUT /favorites/:id req.params', req.params);

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
        { data: data }, // document
        { userId: userId }, // document

        function (err, result) {
            if (err !== null) {
                console.log('PUT /favorites/:id Update error err', err);
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
    console.log('DELETE /favorites/:id');
    console.log('DELETE /favorites/:id req.body', req.body);
    console.log('DELETE /favorites/:id req.query', req.query);
    console.log('DELETE /favorites/:id req.params', req.params);

    favoriteModel.deleteOne({ _id: req.params.id }, function (err, result) {
        if (err !== null) {
            console.log('DELETE /favorites/:id delete error err', err);
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