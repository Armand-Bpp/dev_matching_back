var mongoose = require('mongoose');

let schema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    data: {
        offerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "offer"
        },
        devId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        },
    },
    typeId: {
        type: String,
        enum:["user", "offer"]
    },

    created: {
        type : Date,
        default :Date.now
    }

});

var model = mongoose.model("favorite", schema);

module.exports = model;
