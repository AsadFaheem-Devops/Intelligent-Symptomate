var express = require('express');
var multer = require('multer');
var router = express.Router();

var Medication = require('../model/medication');
var Basic = require('../model/basicinfo');
var Personal = require('../model/personalinfo');
var Allergy = require('../model/allergy');
var Background = require('../model/healthbackground');
var Report=require("../model/report");

var passport = require('passport');
var authenticate = require('../authenticate')

router.use(express.json());

/* GET users listing. */

router.post('/addmedication', authenticate.verifyUser, (req, res, next) => {
    Medication.create({
        p_id: req.user._id,
        drug: req.body.drug
    })
        .then((result) => {
            console.log("Medicine has been added", result);
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json")
            res.json(result)
            console.log(result)
        }, (err) => next(err)

        ).catch((err) => {
            res.statusCode = 404;
            res.json({ err: err, success: false })
        })

})
router.post('/savereports', authenticate.verifyUser, (req, res, next) => {
    console.log(req.body)
    Report.create({
        p_id: req.user._id,
        name:req.body.name,
        cancer:req.body.cancer,
        age:req.body.age,
        time:req.body.time,
        reportID:req.body.reportID,
        gender:req.body.gender
    })
        .then((result) => {
            console.log("Reports has been added", result);
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json")
            res.json(result)
            console.log(result)
        }, (err) => next(err)
  
        ).catch((err) => {
            res.statusCode = 404;
            res.json({ err: err, success: false })
        })
  
  })

router.post('/basicinfo', authenticate.verifyUser, (req, res, next) => {
    console.log(req.body)
    Basic.create({
        age: req.body.age,
        gender: req.body.gender,
        p_id: req.user._id,
     
    })
        .then((result) => {
            console.log("Info has been added", result);
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json")
            res.json(result)
            console.log(result)
        }, (err) => next(err)

        ).catch((err) => {
            res.statusCode = 404;
            res.json({ err: err, success: false })
        })

})

router.post('/personalinfo', authenticate.verifyUser, (req, res, next) => {
    Personal.create({
        p_id: req.user._id,
        height: req.body.height,
        weight: req.body.weight
    })
        .then((result) => {
            console.log("Personal Info has been added", result);
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json")
            res.json(result)
            console.log(result)
        }, (err) => next(err)

        ).catch((err) => {
            res.statusCode = 404;
            res.json({ err: err, success: false })
        })

})



router.post('/allergy', authenticate.verifyUser, (req, res, next) => {
    Allergy.create({
        p_id: req.user._id,
        q1: req.body.q1,
        q2: req.body.q2,
        q3: req.body.q3,
        q4: req.body.q4,
        q5: req.body.q5,
    })
        .then((result) => {
            console.log("Allergy Info has been added", result);
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json")
            res.json(result)
            console.log(result)
        }, (err) => next(err)

        ).catch((err) => {
            res.statusCode = 404;
            res.json({ err: err, success: false })
        })

})

router.post('/background', authenticate.verifyUser, (req, res, next) => {
    Background.create({
        p_id: req.user._id,
        q1: req.body.q1,
        q2: req.body.q2,
        q3: req.body.q3,
        q4: req.body.q4,
        q5: req.body.q5,
    })
        .then((result) => {
            console.log("Background Info has been added", result);
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json")
            res.json(result)
            console.log(result)
        }, (err) => next(err)

        ).catch((err) => {
            res.statusCode = 404;
            res.json({ err: err, success: false })
        })

})

module.exports = router;