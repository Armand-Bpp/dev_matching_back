var mongoose = require('mongoose');

let schema = new mongoose.Schema({

    position: {
        type: String,
        // enum : ["Développeur application mobile", "Développeur Front", "Dev back", "Dev fullstack"],
        // index: true
    },
    companyName: String,

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

    experience: Number,

    description: String,

    created: {
        type : Date,
        default :Date.now
    }

});

var model = mongoose.model("offer", schema);

module.exports = model;
