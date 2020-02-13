var mongoose = require('mongoose');

let schema = new mongoose.Schema({
    name: {
       type : String,

    //    enum :  ["HTML",
    //     "CSS",
    //     "Sass",
    //     "Compass",
    //     "Less",
    //     "Stylus",
    //     "Boostrap",
    //     "Foundation",
    //     "Semantic UI",
    //     "React",
    //     "Angular",
    //     "Vue",
    //     "Java Android",
    //     "Kotlin",
    //     "Obectif-C",
    //     "Swift",
    //     "React Native",
    //     "Flutter",
    //     "Xamarin",
    //     "NativeScript",
    //     "Cordova",
    //     "Ionic",
    //     "C#",
    //     ".NET",
    //     "Handlebars",
    //     "Pug",
    //     "EJS",
    //     "Jade",
    //     "Underscore",
    //     "REST",
    //     "GraphQL",
    //     "SQL",
    //     "MariaDB",
    //     "MySQL", 
    //     "PostgreSQL",
    //     "Db2",
    //     "NoSQL",
    //     "MongoDB",
    //     "Cassandra",
    //     "CouchDB",
    //     "Mamcached"],

        index : true
    },

    parentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "skill"
    },

    created: {
        type : Date,
        default :Date.now
    }
    
})

var model = mongoose.model('skill', schema);

module.exports = model;