var express = require('express');
var router = express.Router(); // same as those 2 lines: var router = require('express').Router();
var userModel = require('../models').user;
const multer = require('multer');
const upload = multer({ dest: 'public/uploads/'});
const fs = require('fs');

// CREATE
router.post('/', upload.single('picture'), function (req, res) {
    console.log('POST /users');
    console.log('POST /users req.body', req.body);
    console.log('POST /users req.query', req.query);
    console.log('POST /users req.params', req.params);
    console.log('POST /users req.file', req.file);
    const mimetypeMap = {
        'image/gif': 'gif',
        'image/jpeg': 'jpg',
        'image/png': 'png',
        'cv/pdf' : 'pdf'
    };
    const extension = mimetypeMap[req.file.mimetype];
    // const filename = req.file.filename;
    // console.log(filename, 'filename');
    // const extension = req.file.mimetype;
    const serverPicture = req.file.path + '.' + extension
    console.log(serverPicture, 'serverpic');
    const picture = serverPicture.replace('public', '');
    console.log(req.file.path, 'reqfilepath');
    const username = req.body.firstName

    fs.rename(req.file.path, 'public/uploads/' + username + '.' + extension , function (err) {
        if (err !== null) {
            console.log('Cannot rename');
            return;
        }

    const user = new userModel({
        role: req.body.role || '',
        firstName: req.body.firstName || '',
        lastName: req.body.lastName || '',
        email: req.body.email || '',
        title: req.body.title || '',
        picture: picture,
        banner: req.body.banner,
        companyName: req.body.companyName || '',
        password: req.body.password || '',
        phoneNumber: req.body.phoneNumber || '',
        experience: req.body.experience || 1,
        city: req.body.city || '',
        postalCode: req.body.postalCode || '',
        contract: req.body.contract || '',
        siret: req.body.siret || '',
        associationNumber: req.body.associationNumber || '',
        skills: req.body.skills || [],
        bio: req.body.bio || '',
        github: req.body.github || '',
        linkedin: req.body.linkedin || '',
        cv: req.body.cv || '',
        position: req.body.position || '',
        created: req.body.created || '',
    });
    user.save(function (err, userDb) {
        if (err !== null) {
            console.log('user save err', err);
            res.json({
                success: false,
                message: err.toString()
            });
            return;
        }
        res.json({
            success: true,
            data: userDb
        });
    });
    })
    // upload

});


// READ
router.get('/', function (req, res) {
    console.log('GET /users');
    console.log('GET /users req.body', req.body);
    console.log('GET /users req.query', req.query);
    console.log('GET /users req.params', req.params);

    var limit = parseInt(req.query.limit);
    if (isNaN(limit) === true) {
        limit = 20;
    }
    if (limit > 20) {
        limit = 20;
    }

    console.log('GET /users limit', limit);

    userModel
        .find({})
        .limit(limit)
        .populate('skills')
        .exec(function (err, users) {
            console.log('GET /users err', err);
            console.log('GET /users users', users);
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
                data: users
            });
        });
});

router.get('/:id', function (req, res) {
    console.log('GET /users/:id');
    console.log('GET /users/:id req.body', req.body);
    console.log('GET /users/:id req.query', req.query);
    console.log('GET /users/:id req.params', req.params);

    userModel
        .findById(req.params.id)
        .populate('skills')
        .exec(function (err, user) {
        console.log('GET /users/:id err', err);
        console.log('GET /users/:id users', user);
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
            data: user
        });
    });
});


// UPDATE
router.put('/:id', function (req, res) {
    console.log('PUT /users/:id');
    console.log('PUT /users/:id req.body', req.body);
    console.log('PUT /users/:id req.query', req.query);
    console.log('PUT /users/:id req.params', req.params);

    var name = req.query.name || '';
    if (name.length === 0) {
        res.json({
            success: false,
            message: 'Name is invalid'
        });
        return;
    }

    userModel.updateOne(
        { _id: req.params.id }, // query
        { name: name }, // document
        function (err, result) {
            if (err !== null) {
                console.log('PUT /users/:id Update error err', err);
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
    console.log('DELETE /users/:id');
    console.log('DELETE /users/:id req.body', req.body);
    console.log('DELETE /users/:id req.query', req.query);
    console.log('DELETE /users/:id req.params', req.params);

    userModel.deleteOne({ _id: req.params.id }, function (err, result) {
        if (err !== null) {
            console.log('DELETE /users/:id delete error err', err);
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