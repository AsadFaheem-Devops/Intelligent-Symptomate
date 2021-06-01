var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var Admin = new Schema({
    name: {
        type: String,
        default: ''
    },
});

Admin.plugin(passportLocalMongoose);
module.exports = mongoose.model('Admin', Admin);