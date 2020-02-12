var mongoose = require('mongoose');

let schema = new mongoose.Schema({
    
    role: {
        type : String,
        enum : ["developer", "company"],
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

<<<<<<< HEAD
    skills : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userSkills",
        index: true
    },
=======
    // skills : {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "userSkills",
    //     index: true
    // },
>>>>>>> 0ac0e0dfa7143001570204828d5f9aac12daa24e

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