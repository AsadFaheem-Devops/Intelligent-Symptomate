var mongoose=require("mongoose");
var schema=mongoose.Schema;

var allergySchema  = new schema({
    q1: {
        type:String,
        required:true
    },
    q2: {
        type:String,
        required:true
    },
    q3: {
        type:String,
        required:true
    },
    q4: {
        type:String,
        required:true
    },
    q5: {
        type:String,
        required:true
    },
    p_id: {
        type: mongoose.Types.ObjectId,
        ref: "Patient"
    }
})
module.exports=mongoose.model('Allergy',allergySchema)