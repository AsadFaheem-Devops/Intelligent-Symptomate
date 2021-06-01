var express = require('express');
var router = express.Router();
var router = express.Router();
var passport = require('passport');
var authenticate = require('../authenticate');
var Patient = require("../model/Patient");
router.use(express.json());




//CHANGE EMAIL
router.get("/changeemail/:email",
authenticate.verifyUser,(req,res,next)=>{
    const email=req.params.email;
    Patient.findOneAndUpdate({_id:req.user._id},{username:email}, (err,user)=>{
        if(err){
            res.json("error")
        }res.json("successful")
    })
}
);

//CHANGE PASSWORD

//CHANGE USERNAME

//CHANGE DOB

//DELETE ACCOUNT

 
module.exports = router;