var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var Patient = new Schema({
    name: {
        type: String,
        default: ''
    },
});

Patient.plugin(passportLocalMongoose);
module.exports = mongoose.model('Patient', Patient);