var mongoose = require('mongoose');

let schema = new mongoose.Schema({

    // body: { type: String, required: true },

    matchId: {
        type: String,
        required: true,
        enum: ["offer", "user"]
    },
    matchData: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: "matchId"
        
    },
    data:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: "typeId"
    }, 

    score : Number,

    typeId: {
        type: String,
        required: true,
        enum: ["offer", "user"]
    },
    // data: {
    //     offerId: {
    //         type: ,
    //         ref: "offer"
    //     },
    //     devId: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "user"
    //     },
    // },
    // typeId: {
    //     type: String,
    //     enum:["user", "offer"]
    // },

    created: {
        type : Date,
        default :Date.now
    }

});

var model = mongoose.model("matching", schema);
// const dev = mongoose.model('user', schema);



module.exports = model;