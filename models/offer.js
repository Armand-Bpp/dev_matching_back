var mongoose = require('mongoose');

let schema = new mongoose.Schema({

    position: {
        type: String,
        index: true
    },

    address: {
        type: String
    },

    contract: {
      type : String,
      enum : ["CDD", "CDI", "Stage", "Freelance"],
      index : true
    },

    duration: {
        type: String
    },

    title: {
        type: String,
        index: true
    },

    city: {
        type: String
    },

    region: {
        type: String
    },

    experience: {
        type: Number
    },

    descritpion: {
        type: String
    },

    created: {
        type : Date,
        default :Date.now
    }

});

var model = mongoose.model("offer", schema);

module.exports = model;
