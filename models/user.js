var mongoose = require('mongoose');

let schema = new mongoose.Schema({
    
    role: {
        type : String,
        index : true
    },

    firstName: String,

    lastName: String,

    email: String,

    picture: String,

    companyName: {
        type: String,
        index: true
    },

    password: String,

    phoneNumber: String,

    experience: {
        type: Number,
        index: true
    },

    city: {
        type: String,
        index: true
    },

    postalCode: String,

    contract: {
        type: String,
        index: true
    },

    siret: String,

    associationNumber: String,

    skills : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user_skills",
        index: true
    },

    bio: String,

    github: String,

    linkedin: String,

    cv: String,
    
    created: {
        type : Date,
        default :Date.now
    }
   
})

var model = mongoose.model('User', schema);

module.exports = model;