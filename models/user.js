var mongoose = require('mongoose');

let schema = new mongoose.Schema({
    role: ['dev', 'ent'],
    firstName: String,
    lastName: String,
    email: String,
    picture: String,
    companyName: String,
    password: String,
    phoneNumber: Number,
    experience: Number,
    city: String,
    postalCode: Number,
    contract: String,
    siret: Number,
    associationNumber: Number,
    bio: String,
    cursus: String
})

var model = mongoose.model('User', schema);

module.exports = model;