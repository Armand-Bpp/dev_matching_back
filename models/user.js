var mongoose = require('mongoose');

let schema = new mongoose.Schema({
    
    role: {
        type : String,
        enum : ["developer", "company"],
        // index : true,
        required: true
    },

    firstName: String,

    lastName: String,

    email: String,

    picture: String,

    companyName: String,

    password: String,

    phoneNumber: String,

    experience: Number,

    city: String,

    position: String,

    postalCode: String,

    contract: {
        type: String,
        index: true
    },

    siret: String,

    associationNumber: String,

    // skills : {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "userSkills",
    //     index: true
    // },

    bio: String,

    github: String,

    linkedin: String,

    cv: String,
    
    created: {
        type : Date,
        default :Date.now
    }
   
})

var model = mongoose.model('user', schema);

module.exports = model;