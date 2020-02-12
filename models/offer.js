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
      type : ["CDD", "CDI", "Stage", "Freelance"]
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

var model = mongoose.model("offers", schema);

module.exports = model;
