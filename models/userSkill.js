var mongoose = require('mongoose');

let schema = new mongoose.Schema({
    category: {
        type: ["back", "front", "mobile", "tools"],
        index : true
    },

    created: {
        type : Date,
        default :Date.now
    }
    
})

var model = mongoose.model('userSkill', schema);

module.exports = model;