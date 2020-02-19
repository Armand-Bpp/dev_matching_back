var express = require('express');
var router = express.Router(); // same as those 2 lines: var router = require('express').Router();

const matchingModel = require('../models').matching;


router.get('/', function (req, res) {
    console.log('GET /matching');
    console.log('GET /matching req.body', req.body);
    console.log('GET /matching req.query', req.query);
    console.log('GET /matching req.params', req.params);


    matchingModel
    .find({})
    // .populate('data')
        // .limit(limit)
        .exec(function (err, matches) {
            console.log('GET /matching err', err);
            console.log('GET /matching matching', matches);
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
                data: matches
            });
        });

    });

// });

router.get('/users/:id', function (req, res) {
    console.log('GET /matching/:id');
    console.log('GET /matching/:id req.body', req.body);
    console.log('GET /matching/:id req.query', req.query);
    console.log('GET /matching/:id req.params', req.params);
    // console.log(query.data,'data');
    
    // const query = {
    //     userId: req.body.userId,
    //     typeId: req.body.typeId,
    //     offerId: req.body.offerId,
    //     devId: req.body.devId,
    //     data: req.body.data
    // }
    // console.log(userId,'userid');
    // console.log(query.data,'querydata');
    

    

    // if (query.typeId === "user"){
    matchingModel
        .find({userId: req.params.id})
        .populate('data')
            // .limit(limit)
            .exec(function (err, matches) {
                console.log('GET /matches err', err);
                console.log('GET /matches matches', matches);
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
                    data: matches
                });
            });

    // } else if (query.typeId === "offer"){

    });


module.exports = router;