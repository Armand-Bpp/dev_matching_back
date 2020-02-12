const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


let UserSchema = new mongoose.Schema({
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
});

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', UserSchema);

module.exports = User;