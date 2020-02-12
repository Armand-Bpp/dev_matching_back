var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var controllers = require('./controllers');
var UserController = controllers.user;
var OfferController = controllers.offer;
<<<<<<< HEAD
var FavoriteController = controllers.favorite
=======
var SkillController = controllers.skill;
var UserSkillController = controllers.userSkill;
>>>>>>> 993992b51343f4fd324853dca8a7d5b443e57654


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
<<<<<<< HEAD
app.use('/favorite', FavoriteController)
=======
app.use('/skill', SkillController);
app.use('/userSkill', UserSkillController);
>>>>>>> 993992b51343f4fd324853dca8a7d5b443e57654

app.use('*', function (req, res) {
    res.json({
        success: false,
        title: 'Dev matching basics API',
        message: 'Route not found'
    });
});

app.listen(port, function () {
    console.log('Server started on port:', port);
});