var mongoose = require('mongoose');

let schema = new mongoose.Schema({
    
    role: {
        type : ['dev', 'ent'],
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

    phoneNumber: Number,

    experience: {
        type: String,
        index: true
    },

    city: {
        type: String,
        index: true
    },

    postalCode: Number,

    contract: {
        type: String,
        index: true
    },

    siret: Number,

    associationNumber: Number,

    bio: String,
    
    cursus: {
        type: String,
        index: true
    }
})

var model = mongoose.model('User', schema);

module.exports = model;
