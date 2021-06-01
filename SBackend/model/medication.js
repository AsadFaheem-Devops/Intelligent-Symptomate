var mongoose = require("mongoose");
var schema = mongoose.Schema;

var medSchema = new schema({
    drug: {
        type: [String],
        required: true
    },

    p_id: {
        type: mongoose.Types.ObjectId,
        ref: "Patient"
    }
})
module.exports = mongoose.model('Medication', medSchema)