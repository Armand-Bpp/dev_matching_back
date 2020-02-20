var mongoose = require('mongoose');

let schema = new mongoose.Schema({

    position: {
        type: String,
        // enum : ["Développeur application mobile", "Développeur Front", "Dev back", "Dev fullstack"],
        // index: true
    },
    companyName: String,

    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },

    address: String,

    contract: {
      type : String,
    //   enum : ["CDD", "CDI", "Stage", "Freelance"],
    //   index : true
    },

    duration: String,

    title: String,

    city: String,

    region: String,

    skills : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "skill",
        index: true
    }],

    experience: Number,

    description: String,

    created: {
        type : Date,
        default :Date.now
    }

});

var model = mongoose.model("offer", schema);

module.exports = model;
