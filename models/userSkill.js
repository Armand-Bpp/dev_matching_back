var mongoose = require('mongoose');

let schema = new mongoose.Schema({
    category: {
        type: [ "mobile", "front","back","tools"],
        index : true
    },

    created: {
        type : Date,
        default :Date.now
    }
    
})

var model = mongoose.model('userSkill', schema);

module.exports = model;