var mongoose=require("mongoose");
var schema=mongoose.Schema;

var emailSchema  = new schema({
    name: {
        type:String,
        required:true
    },
})
module.exports=mongoose.model('Email',emailSchema)