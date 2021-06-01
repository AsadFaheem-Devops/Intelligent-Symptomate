var mongoose=require("mongoose");
var schema=mongoose.Schema;

var personalSchema  = new schema({
    height: {
        type:Number,
        required:true
    },
    weight: {
        type:Number,
        required:true
    },
    p_id: {
        type: mongoose.Types.ObjectId,
        ref: "Patient"
    }
})
module.exports=mongoose.model('PersonalInfo',personalSchema)