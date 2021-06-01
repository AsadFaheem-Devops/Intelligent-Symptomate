var mongoose = require("mongoose");
var schema = mongoose.Schema;

var reportSchema = new schema({
    name: {
        type: String,
        required: true
    },
    cancer: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    time: {
        type: String,
        required: true
    },

    reportID: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    },


    p_id: {
        type: mongoose.Types.ObjectId,
        ref: "Patient"
    }
})
module.exports = mongoose.model('Report', reportSchema)

// var mongoose=require("mongoose");
// var schema=mongoose.Schema;

// var reportSchema  = new schema({
//     name: {
//         type:String,
//         required:true
//     },
//     cancer: {
//         type:String,
//         required:true
//     },

//     time: {
//         type:String,
//         required:true
//     },

//     reportID: {
//         type:String,
//         required:true
//     },

//     gender: {
//         type:String,
//         required:true
//     },
//     age: {
//         type:String,
//         required:true
//     },
//     p_id: {
//         type: mongoose.Types.ObjectId,
//         ref: "Patient"
//     }
// })
// module.exports=mongoose.model('Report',reportSchema)