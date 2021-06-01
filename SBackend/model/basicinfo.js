var mongoose = require("mongoose");
var schema = mongoose.Schema;

var basicSchema = new schema({

    age: {
        type: Number,
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
module.exports = mongoose.model('Basicinfo', basicSchema)