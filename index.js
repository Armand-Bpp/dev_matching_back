var express = require("express");
// var exphbs = require("express-handlebars");
var expressSession = require("express-session");
var MongoStore = require("connect-mongo")(expressSession);
var mongoose = require("mongoose");
// var passport = require("passport");
var bodyParser = require("body-parser");
// var LocalStrategy = require("passport-local");

const port = 3000;


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost:27017/devmatch", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    },
    function (err) {
        if (err !== null) {
            console.log('Dabatase connection err', err);
            return;
        }
        console.log('Database connected');

    }
);

var app = express();

app.get("/", function(req,res){
    console.log('get/home')
})

app.listen(port, function(){
    console.log('server started')

})