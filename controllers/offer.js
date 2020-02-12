var express = require('express');
var router = express.Router(); // same as those 2 lines: var router = require('express').Router();

var offerModel = require('../models').offer;

// CREATE
router.post('/', function (req, res) {
    console.log('POST /offers');
    console.log('POST /offers req.body', req.body);
    console.log('POST /offers req.query', req.query);
    console.log('POST /offers req.params', req.params);

    var offer = new OffersModel({
        position: req.body.poste || '',
        address: req.body.address || '',
        contracts: req.body.contracts || '',
        duration: req.body.duration || '',
        title: req.body.title || '',
        city: req.body.city || '',
        region: req.body.region || '',
        experience: req.body.experience || 1,
        descritpion: req.body.descritpion || ''
    });
    offer.save(function (err, offerDb) {
        if (err !== null) {
            console.log('offer save err', err);
            res.json({
                success: false,
                message: err.toString()
            });
            return;
        }
        res.json({
            success: true,
            data: offerDb
        });
    });
});


// READ
router.get('/', function (req, res) {
    console.log('GET /offers');
    console.log('GET /offers req.body', req.body);
    console.log('GET /offers req.query', req.query);
    console.log('GET /offers req.params', req.params);

    var limit = parseInt(req.query.limit);
    if (isNaN(limit) === true) {
        limit = 20;
    }
    if (limit > 20) {
        limit = 20;
    }

    console.log('GET /offers limit', limit);

    offerModel
        .find({})
        .limit(limit)
        .exec(function (err, offers) {
            console.log('GET /offers err', err);
            console.log('GET /offers offers', offers);
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
                data: offers
            });
        });
});

router.get('/:id', function (req, res) {
    console.log('GET /offers/:id');
    console.log('GET /offers/:id req.body', req.body);
    console.log('GET /offers/:id req.query', req.query);
    console.log('GET /offers/:id req.params', req.params);

    offerModel.findById(req.params.id, function (err, offer) {
        console.log('GET /offers/:id err', err);
        console.log('GET /offers/:id offers', offer);
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
            data: offer
        });
    });
});

// UPDATE
router.put('/:id', function (req, res) {
    console.log('PUT /offers/:id');
    console.log('PUT /offers/:id req.body', req.body);
    console.log('PUT /offers/:id req.query', req.query);
    console.log('PUT /offers/:id req.params', req.params);

    var name = req.query.name || '';
    if (name.length === 0) {
        res.json({
            success: false,
            message: 'Name is invalid'
        });
        return;
    }

    offerModel.updateOne(
        { _id: req.params.id }, // query
        { name: name }, // document
        function (err, result) {
            if (err !== null) {
                console.log('PUT /offers/:id Update error err', err);
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
    console.log('DELETE /offers/:id');
    console.log('DELETE /offers/:id req.body', req.body);
    console.log('DELETE /offers/:id req.query', req.query);
    console.log('DELETE /offers/:id req.params', req.params);

    offerModel.deleteOne({ _id: req.params.id }, function (err, result) {
        if (err !== null) {
            console.log('DELETE /offers/:id delete error err', err);
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