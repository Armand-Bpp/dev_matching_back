var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var controllers = require('./controllers');
var UserController = controllers.user;
var OfferController = controllers.offer;
var FavoriteController = controllers.favorite
var SkillController = controllers.skill;
var UserSkillController = controllers.userSkill;


mongoose.connect(
    'mongodb://localhost:27017/dev_matching',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    function (err) {
        if (err !== null) {
            console.log('DB connection failed');
            return;
        }
        console.log('DB connected');
    }
);

var port = 3000;

var app = express();

// Configuration

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('/user', UserController);
app.use('/offer', OfferController);
app.use('/skill', SkillController);

app.use('*', function (req, res) {
        success: false,
        title: 'Dev matching basics API',
        message: 'Route not found'
    });
});

app.listen(port, function () {
    console.log('Server started on port:', port);
});